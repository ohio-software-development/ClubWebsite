import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ProjectsService, project } from '../services/projects.service';

@Component({
  selector: 'app-current',
  styleUrls: ['current-project.component.scss'],
  templateUrl: 'current-project.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CurrentProjectComponent {

  constructor(private projectService: ProjectsService){}

  ELEMENT_DATA = this.projectService.projects.map((project) => ({
    Name: project.name,
    Language: 'Filler'
  }))

  dataSource = this.ELEMENT_DATA;
  columnsToDisplay = ['Name', 'Language'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: project | null = null;
}

