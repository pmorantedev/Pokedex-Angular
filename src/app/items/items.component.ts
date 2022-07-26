import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  item: any;
  itemsArray: Array<any> = [];


  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    for (let i = 1; i <= 1005; i++) {
      this.item = this.ApiService.GetItemById(i);
      this.itemsArray.push(this.item);
    }
  }

}
