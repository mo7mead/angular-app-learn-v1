import { Component, Input, OnChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, HighlightCardDirective,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  {

  products: Iproduct[]
  selectCategoryId: number = 0
  totolOrderPrice: number = 0
  myDate: Date = new Date()
  number: number = 4

  @Input() recivedCatId: number = 0

  constructor() {
    this.products = [
      {
        id: 100,
        name: "Show how to work",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 200,
        name: "Show home manger",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 300,
        name: "Laptop Hp Home",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 400,
        name: "Laptop Dell and HP",
        price: 10,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 500,
        name: "homee e ee e e e e",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 1
      },
      {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 20
      }, {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 20
      }, {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 20
      }, {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 25,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 2
      }, {
        id: 600,
        name: "stand allon show",
        price: 57797979,
        quantity: 0,
        imgUrl: 'https://picsum.photos/200/300',
        catId: 2
      }
    ]


  }


  buy(count: string, price: number) {
    this.totolOrderPrice += parseInt(count) * price
  }

  change() {
    this.selectCategoryId = 3
  }

}
