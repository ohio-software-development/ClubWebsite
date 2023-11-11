import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  {
    path: 'dash', component: LayoutComponent, children:
      [
        { path: '', component: HomeComponent },
        { path: 'members', component: MembersComponent },
        {path: 'projects', component: ProjectsComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
