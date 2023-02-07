import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemCardComponent } from './skill-item-card.component';

describe('SkillItemCardComponent', () => {
  let component: SkillItemCardComponent;
  let fixture: ComponentFixture<SkillItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
