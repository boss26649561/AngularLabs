import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChatPageComponent } from './chat-page.component';
import { FormsModule } from '@angular/forms';
describe('ChatPageComponent', () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;
  const routes: Routes = [{ path: 'chat/:id', component: ChatPageComponent }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatPageComponent],
      imports: [RouterModule.forRoot(routes),HttpClientModule,FormsModule],
      providers: [{ APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
