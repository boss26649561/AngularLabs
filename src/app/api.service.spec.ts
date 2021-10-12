import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
describe('ApiService', () => {
  let service: ApiService;
  imports: [HttpClientModule]
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('API services should be created', () => {
    expect(service).toBeTruthy();
  });
});
