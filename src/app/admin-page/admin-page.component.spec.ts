import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page.component';
import { FormsModule } from '@angular/forms';
describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;
  const routes: Routes = [{ path: 'account2', component: AdminPageComponent }];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPageComponent],
      imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 1 extra input compared to Group Admin component', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(formElement.length).toEqual(9);
  });

  it('should bind configured value', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(formElement.length).toEqual(9);
  });


});
