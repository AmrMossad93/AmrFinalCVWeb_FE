import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  imageName = '';
  imageList: string[] = []
  activeIndex: number = 0

  constructor(
    public dialogRef: MatDialogRef<ImageGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.imageName = this.data.imageName;
    this.imageList = this.data.imageList;
    this.activeIndex = this.data.activeIndex;
  }
}
