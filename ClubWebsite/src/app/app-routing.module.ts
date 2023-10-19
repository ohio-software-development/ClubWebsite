import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MembersComponent } from './members/members.component';
import { PastProjectComponent } from './past-project/past-project.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  {
    path: 'dash', component: LayoutComponent, children:
      [
        { path: '', component: HomeComponent },
        { path: 'members', component: MembersComponent },
        // { path: 'past', component: PastProjectComponent },
        // { path: 'current', component: CurrentProjectComponent },
        {path: 'projects', component: ProjectsComponent},
        { path: 'contact', component: ContactComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
