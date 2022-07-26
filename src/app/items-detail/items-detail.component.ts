import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})
export class ItemsDetailComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const string = String(this.route.snapshot.paramMap.get('name'));
    this.item = this.ApiService.GetItemByName(string);
  }

}
