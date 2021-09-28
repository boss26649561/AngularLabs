import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdModel } from '../prod-model';
import { ProdServiceService } from '../prod-service.service';
@Component({
  selector: 'app-prod-get',
  templateUrl: './prod-get.component.html',
  styleUrls: ['./prod-get.component.css'],
})
export class ProdGetComponent implements OnInit {
  constructor(
    private prodService: ProdServiceService,
    private router: Router
  ) {}
  prods!: ProdModel[];
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.prodService.productFind().subscribe((data: any) => {
      this.prods = data;
    });
  }

  deleteProduct(id: any) {
    if (confirm('Are you sure you want to delete this item')) {
      this.prodService.productDelete({ id }).subscribe((data: any) => {
        this.prods = data;
      });
    }
  }

  updateProduct(product: ProdModel) {
    localStorage.removeItem('product');
    localStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['prod-edit']);
  }
}
