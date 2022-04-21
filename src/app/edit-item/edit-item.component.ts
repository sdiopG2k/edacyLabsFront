import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemServiceService } from '../services/item-service.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  item!: Item;
  id!: number;
  form!: FormGroup;
  constructor(private router: Router, private itemService:ItemServiceService, private formBuilder: FormBuilder,private route: ActivatedRoute,) { 
    if (this.router.getCurrentNavigation()?.extras) {
      this.id = this.router.getCurrentNavigation()?.['extras']?.['state']?.['id'];
      console.log('id item ==========> ',this.id);
    }
  }

  ngOnInit(): void {
  
    
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getItemById(this.id);
    
  }

  getItemById(id:number){
    this.itemService.getItemById(id)
      .subscribe(data => {
        this.item = data.payload
        console.log('My item ===================> ', this.item);
        
      })
  }
  updateItem(){
    let itemDto = {
      idItem :this.id,
      title:this.form.get('title')?.value === ''?this.item.title:this.form.get('title')?.value,
      description:this.form.get('description')?.value ===''?this.item.description:this.form.get('description')?.value
    }
    console.log(itemDto);
    this.itemService.updateItem(itemDto)
      .subscribe(data => {
        this.item = data.payload
        this.router.navigate(['../'], { relativeTo: this.route });
        console.log('My item ===================> ', this.item);
        
      })

  }
  goBack(){
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
