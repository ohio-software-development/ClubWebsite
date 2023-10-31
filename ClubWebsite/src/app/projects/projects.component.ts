import { Component, OnInit } from '@angular/core';
import { ProjectsService, project } from '../services/projects.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Octokit } from 'octokit';
import { MatTableDataSource } from '@angular/material/table';

const octokit = new Octokit({
  auth: "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"
});

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {


  constructor(private projectService: ProjectsService) { }

  tableData = new MatTableDataSource<project>();
  // ELEMENT_DATA = this.projectService.projects.map((project) => ({
  //   name: project.name,
  //   language: project.language,
  //   active: project.active
  // }));

  ngOnInit(): void {
    octokit.request("GET /orgs/{org}/repos", {
      org: 'ohio-software-development',
    }).then((result) => {
      console.log(result)
      if (result) {
        this.tableData.data = result.data.map((repos) => ({
          name: repos.name,
          description: repos.description ? repos.description : '',
          language: repos.language ? repos.language : 'null',
          githubUrl: repos.html_url ? repos.html_url : '',
          active: true,
        }))
      }
    })
  }

  dataSource = this.tableData;
  columnsToDisplay = ['name', 'language', 'active'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: project | null = null;

}
