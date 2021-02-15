import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
    // budgetItems: BudgetItem[]=new Array<BudgetItem>();



  constructor(public dialogref: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) 
    { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:BudgetItem) {
    this.dialogref.close(updatedItem);
    

  }

}
