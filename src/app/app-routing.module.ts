import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { GroupAdminPageComponent } from './group-admin-page/group-admin-page.component';
import { GroupAssistantPageComponent } from './group-assistant-page/group-assistant-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'account1', component: UserPageComponent },
  { path: 'account2', component: AdminPageComponent },
  { path: 'account3', component: GroupAdminPageComponent },
  { path: 'account4', component: GroupAssistantPageComponent },
  { path: 'chat/:id', component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
