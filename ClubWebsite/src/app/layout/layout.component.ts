import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  links = ['Home', 'Projects', 'Members'];
  linkPath = ['/', 'projects', 'members'];
  activeLink = this.links[0];

}
