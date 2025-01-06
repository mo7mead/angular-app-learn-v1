import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { StaticProductsService } from '../../services/static-products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, HighlightCardDirective,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  products: Iproduct[]
  selectCategoryId: number = 0
  totolOrderPrice: number = 0
  myDate: Date = new Date()
  number: number = 4

  @Input() recivedCatId: number = 0

  constructor(private _staticProductService: StaticProductsService) {
    this.products = this._staticProductService.getAllProuducts()




  }


  ngOnChanges(): void {
    this.selectCategoryId = this.recivedCatId;
    this.products = this._staticProductService.getProductByCategoryId(this.selectCategoryId);
  }


  buy(count: string, price: number) {
    this.totolOrderPrice += parseInt(count) * price
  }

  change() {
    this.selectCategoryId = 3
  }

}
