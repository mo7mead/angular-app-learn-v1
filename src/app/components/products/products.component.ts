import { Component } from '@angular/core';
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
export class ProductsComponent {

  products: Iproduct[];
  // filterProducts: Iproduct[]
  categories: Icategory[] | undefined;
  selectCategoryId: number = 0
  totolOrderPrice: number = 0
  myDate: Date = new Date()
  number: number = 4

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
    ],

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

  buy(count: string, price: number) {
    this.totolOrderPrice += parseInt(count) * price
  }

  change() {
    this.selectCategoryId = 3
  }

  // filterProducts() {

  // }
}
