import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAssistantPageComponent } from './group-assistant-page.component';

describe('GroupAssistantPageComponent', () => {
  let component: GroupAssistantPageComponent;
  let fixture: ComponentFixture<GroupAssistantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAssistantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
