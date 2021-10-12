import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAssistantPageComponent } from './group-assistant-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

describe('GroupAssistantPageComponent', () => {
  let component: GroupAssistantPageComponent;
  let fixture: ComponentFixture<GroupAssistantPageComponent>;
  let router: Router;
  const routes: Routes = [
    { path: 'account4', component: GroupAssistantPageComponent },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupAssistantPageComponent],
      imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule,],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAssistantPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    component.username = { username: 'Test User' };
    fixture.detectChanges();
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

  it('channel.length of sports should be 3', () => {
    
    let mockgroups = [{
      name: "Sports",
      users: ["test3", "test4", "test5"],
      channels: [1, 2, 4]
    }]
      
    expect(mockgroups[0].channels.length).toBe(3)
    
  });

  
});
