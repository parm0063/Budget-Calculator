import { EditModalComponent } from './../edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() clickDelete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  itemDelete(item: BudgetItem) {
    // this.budgetItems.splice(item,1);
    this.clickDelete.emit(item);
    console.log(item);
  }

  oncardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '580px',
      data: item

    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
    //     this.budgetItems[this.budgetItems.indexOf(item)] = result;

    //  } })
    this.update.emit({
      old: item,
      new: result
    });
  }
})

  // hello(item: BudgetItem) {
  //   this.clickDelete.emit(item);
  //   console.log(item);
  // }

    }

  }

  export interface UpdateEvent {
    old:BudgetItem;
    new: BudgetItem;
  }
