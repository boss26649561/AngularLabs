import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdGetComponent } from './prod-get.component';

describe('ProdGetComponent', () => {
  let component: ProdGetComponent;
  let fixture: ComponentFixture<ProdGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
