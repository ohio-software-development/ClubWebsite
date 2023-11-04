import { Component, OnInit } from '@angular/core';
import { ProjectsService, contributor, project } from '../services/projects.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';

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

  constructor(private projectService: ProjectsService, private http: HttpClient) { }

  tableData = new MatTableDataSource<project>();
  contributors: contributor[] = [];

  async ngOnInit(): Promise<void> {
    this.tableData.data = await this.projectService.cache;
  }

  dataSource = this.tableData;
  columnsToDisplay = ['name', 'language', 'active'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: project | null = null;

  loadContributors(repo: project) {
    this.contributors = [];
    this.http.get(repo.contributors).pipe(
      switchMap(async (res) => { //converts JSON data to array
        return await Object.entries(res)
      }),
      switchMap(async (res) => { //converts 2d array to 1d and filters out numbers that are put in array
        return await res.flat().filter((element) => isNaN(element))
      }),
      switchMap(async (res) => { //converts array to right data type
        return await res.map((element) => ({
          userName: element.login,
          userUrl: element.html_url,
          avatar: element.avatar_url
        }))
      }),
      tap(async t => console.log(await t)),
    ).subscribe((contributors: contributor[]) => {
      this.contributors = contributors
    })
  }

}
