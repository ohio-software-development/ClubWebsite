import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  links = ['Home', 'Current Projects', 'Past Projects', 'Members', 'Contact'];
  linkPath = ['/', 'current', 'past', 'members', 'contact']
  activeLink = this.links[0];
}
