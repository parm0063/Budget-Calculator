import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-budget-items',
  templateUrl: './budget-items.component.html',
  styleUrls: ['./budget-items.component.scss']
})
export class BudgetItemsComponent implements OnInit {
  @Input() item!: BudgetItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(item: BudgetItem) {
    this.deleteItem.emit(item);
    console.log(item);
  }

  onCardClick() {
    this.cardClick.emit();

  }

}
