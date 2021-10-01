import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAdminPageComponent } from './group-admin-page.component';

describe('GroupAdminPageComponent', () => {
  let component: GroupAdminPageComponent;
  let fixture: ComponentFixture<GroupAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
