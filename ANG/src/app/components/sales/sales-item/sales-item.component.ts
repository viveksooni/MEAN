import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-item',
  templateUrl: './sales-item.component.html',
  styleUrls: ['./sales-item.component.css']
})
export class SalesItemComponent implements OnInit {
  @Input() salesItem:any
  constructor() { }

  ngOnInit(): void {
  }

}
