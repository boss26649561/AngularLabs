import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GroupAdminPageComponent } from './group-admin-page.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
describe('GroupAdminPageComponent', () => {
  let component: GroupAdminPageComponent;
  let fixture: ComponentFixture<GroupAdminPageComponent>;
  let router: Router;
  const routes: Routes = [
    { path: 'account3', component: GroupAdminPageComponent },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupAdminPageComponent],
      imports: [RouterModule.forRoot(routes), HttpClientModule, FormsModule,ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAdminPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase id after calling adding a channel', () => {
    expect(component.currentid).toBe(0);
    component.addChannel('test');
    expect(component.currentid).toBe(1);
  });

  it('should test that there are 8 inputs for the forms', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(formElement.length).toEqual(8);
  });
});
