import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  selectCategoryId: number = 0
  categories: Icategory[] | undefined

  @ViewChild('inputUserName') myInput!: ElementRef;



  constructor() {


    this.categories = [
      {
        id: 1,
        name: "Laptop"
      }
      , {
        id: 20,
        name: "Home"
      },
      {
        id: 2,
        name: "Best"
      }
    ]
  }

  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = "mo7mead"

  }
}
