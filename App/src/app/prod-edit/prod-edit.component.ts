import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css'],
})
export class ProdEditComponent implements OnInit {
  constructor(
    private prodService: ProdServiceService,
    private router: Router
  ) {}
  prod = JSON.parse(localStorage.getItem('product') || '{}');

  ngOnInit(): void {}
  editfunc() {
    this.prodService.productUpdate(this.prod).subscribe((data) => {
      console.log(data);
      this.router.navigate(['prod-get']);
    });
  }
}
