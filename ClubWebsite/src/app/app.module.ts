import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material.module';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './services/projects.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    MembersComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ps: ProjectsService) => {ps.load()},
      deps: [ProjectsService],
      multi: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
