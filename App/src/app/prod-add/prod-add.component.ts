import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdModel } from '../prod-model';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css'],
})
export class ProdAddComponent implements OnInit {
  constructor(
    private prodService: ProdServiceService,
    private router: Router
  ) {}

  prod: ProdModel = { id: 0, Name: '', Price: 0, Description: '', units: 0 };
  ngOnInit(): void {}
  insertfunc() {
    this.prodService.productInsert(this.prod).subscribe((data) => {
      if (data.err == null) {
        alert('Successfully added');
      } else {
        alert('ID is already in database');
      }
    });
  }
  test() {
    console.log(this.prod);
  }
}
