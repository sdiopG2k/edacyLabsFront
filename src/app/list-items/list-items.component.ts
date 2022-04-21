import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemServiceService } from '../services/item-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  items : Item[] = [];
  p: number = 1;
  constructor(private router: Router,private itemService:ItemServiceService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getAllItems()
      .subscribe(data => {
        console.log("page", this.p)
        this.items = data.payload
      })
  }

  getIdItem(id:number) {
    console.log("id", id)
    this.router.navigate(['/edit'], {
      state: { id}
    })
  }

  getPage(p:any){
    console.log("page", this.p)
  }

}
