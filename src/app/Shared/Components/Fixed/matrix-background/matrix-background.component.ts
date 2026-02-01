import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, NgZone } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-matrix-background',
  templateUrl: './matrix-background.component.html',
  styleUrl: './matrix-background.component.scss',
  standalone: false
})
export class MatrixBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private lines!: THREE.LineSegments;
  private animationId!: number;

  private readonly PARTICLE_COUNT = 600;
  private readonly MAX_DISTANCE = 110;
  private readonly SPHERE_RADIUS = 800;

  private mouse = new THREE.Vector2(-1000, -1000);

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        this.initThree();
        this.ngZone.runOutsideAngular(() => {
          this.animate();
        });
      } catch (error) {
        console.error('MatrixBackground: Error during Three.js initialization:', error);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private initThree() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) {
      console.warn('MatrixBackground: Canvas element not found');
      return;
    }

    // Scene setup
    this.scene = new THREE.Scene();

    // Camera setup
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 5, 5000);
    this.camera.position.z = 1200;

    // Renderer setup
    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      this.renderer.setClearColor(0x000000, 0);
    } catch (e) {
      console.error('MatrixBackground: WebGL not supported', e);
      return;
    }

    // Particles setup
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.PARTICLE_COUNT * 3);
    const velocities = new Float32Array(this.PARTICLE_COUNT * 3);

    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      // Spherical distribution
      const r = this.SPHERE_RADIUS * Math.pow(Math.random(), 1/3);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      velocities[i * 3] = (Math.random() - 0.5) * 0.8;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    (geometry as any).userData = { velocities };

    // Create a circular texture for the points
    const dotCanvas = document.createElement('canvas');
    dotCanvas.width = 64;
    dotCanvas.height = 64;
    const ctx = dotCanvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(dotCanvas);

    const material = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 2,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      map: texture,
      alphaTest: 0.5
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Lines setup
    const lineGeometry = new THREE.BufferGeometry();
    // Pre-allocate a large enough buffer for lines to avoid re-creating it every frame
    // Max lines could be PARTICLE_COUNT * (PARTICLE_COUNT - 1) / 2, but we limit it
    const maxLines = 4000;
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLines * 2 * 3), 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.2
    });

    this.lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    this.scene.add(this.lines);
  }

  private animate = () => {
    if (!this.renderer || !this.scene || !this.camera) return;

    this.animationId = requestAnimationFrame(this.animate);

    const positionAttr = this.particles?.geometry.getAttribute('position') as THREE.BufferAttribute;
    const velocities = (this.particles?.geometry as any)?.userData?.velocities as Float32Array;

    if (positionAttr && velocities) {
      const positions = positionAttr.array as Float32Array;
      const linePositionAttr = this.lines.geometry.getAttribute('position') as THREE.BufferAttribute;
      const linePositions = linePositionAttr.array as Float32Array;
      let lineCount = 0;
      const maxLines = (linePositions.length / 6);

      const mouseX = this.mouse.x * 800;
      const mouseY = this.mouse.y * 800;

      for (let i = 0; i < this.PARTICLE_COUNT; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        positions[ix] += velocities[ix];
        positions[iy] += velocities[iy];
        positions[iz] += velocities[iz];

        // Mouse interaction
        const dx_m = positions[ix] - mouseX;
        const dy_m = positions[iy] - mouseY;
        const dist_m_sq = dx_m * dx_m + dy_m * dy_m;

        if (dist_m_sq < 30000) {
          const dist_m = Math.sqrt(dist_m_sq);
          const force = (173 - dist_m) / 173;
          positions[ix] += dx_m * force * 0.02;
          positions[iy] += dy_m * force * 0.02;
        }

        // Boundary checks
        const distSq = positions[ix] * positions[ix] + positions[iy] * positions[iy] + positions[iz] * positions[iz];
        if (distSq > this.SPHERE_RADIUS * this.SPHERE_RADIUS) {
          const dist = Math.sqrt(distSq);
          const nx = positions[ix] / dist;
          const ny = positions[iy] / dist;
          const nz = positions[iz] / dist;
          const dot = velocities[ix] * nx + velocities[iy] * ny + velocities[iz] * nz;
          
          if (dot > 0) {
            velocities[ix] -= 2 * dot * nx;
            velocities[iy] -= 2 * dot * ny;
            velocities[iz] -= 2 * dot * nz;
          }
        }

        // Lines between nearby particles
        for (let j = i + 1; j < this.PARTICLE_COUNT; j++) {
          if (lineCount >= maxLines) break;

          const jx = j * 3;
          const jy = j * 3 + 1;
          const jz = j * 3 + 2;

          const dx = positions[ix] - positions[jx];
          const dy = positions[iy] - positions[jy];
          const dz = positions[iz] - positions[jz];
          const dist_sq = dx * dx + dy * dy + dz * dz;

          if (dist_sq < this.MAX_DISTANCE * this.MAX_DISTANCE) {
            const lix = lineCount * 6;
            linePositions[lix] = positions[ix];
            linePositions[lix + 1] = positions[iy];
            linePositions[lix + 2] = positions[iz];
            linePositions[lix + 3] = positions[jx];
            linePositions[lix + 4] = positions[jy];
            linePositions[lix + 5] = positions[jz];
            lineCount++;
          }
        }
      }

      positionAttr.needsUpdate = true;
      linePositionAttr.needsUpdate = true;
      this.lines.geometry.setDrawRange(0, lineCount * 2);

      this.particles.rotation.y += 0.0002;
      this.lines.rotation.y += 0.0002;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
