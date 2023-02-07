import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrls: ['./programming-skills.component.scss']
})
export class ProgrammingSkillsComponent {
  constructor(
    public dialogRef: MatDialogRef<ProgrammingSkillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }
}
