import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  products: Iproduct[]

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

  getAllProuducts(): Iproduct[] {
    return this.products
  }

  getProductById(id: number): Iproduct | null {
    let foundProduct = this.products.find((prd) => prd.id == id);
    return foundProduct ? foundProduct : null;

  }

  getProductByCategoryId(cardId: number) {
    if (cardId == 0) {
      return this.products;
    }
    else {
      return this.products.filter((prd) => prd.catId == cardId)
    }

  }


}