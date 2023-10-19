import { Component } from '@angular/core';
import { ProjectsService, project } from '../services/projects.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectsComponent {

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
