import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { inject } from '@angular/core';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  // let location: Location;
  let router: Router;
  const routes: Routes = [
    { path: 'account1', component: UserPageComponent },
    
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPageComponent],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      providers: [{ provide: Location }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //
    router = TestBed.get(Router);
    component.username = { username: 'Test User' };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reroute to login if not logged in', () => {
    const spy = spyOn(router, 'navigate');
    component.checkSession();
    expect(spy.calls.first().args[0]).toContain('/');
  });

  it('should show right Heading when there is a username', () => {
    fixture.detectChanges(); 
    const formElement = fixture.debugElement.nativeElement.querySelector('h1');
    expect(formElement.textContent).toContain(
      'Welcome Test User'
    );
  });
});
