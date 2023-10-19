import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  links = ['Home', 'Projects', 'Members', 'Contact'];
  linkPath = ['/', 'projects', 'members', 'contact'];
  activeLink = this.links[0];

}
