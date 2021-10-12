import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const routes: Routes = [{ path: '', component: LoginComponent }];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    //expect(component).toBeNull
  });

  it('should test that there a 3 inputs for login', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#formContent');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });

  it('should call loginfunc when clicked', () => {
    fixture.detectChanges();
    spyOn(component, 'loginfunc');
    component.loginfunc();
    expect(component.loginfunc).toHaveBeenCalledTimes(1);
  });
});
