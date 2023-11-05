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
      transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectsService, private http: HttpClient) { }

  tableData = new MatTableDataSource<project>();
  contributors: contributor[] = [];
  contributorLoading: boolean = false;

  async ngOnInit(): Promise<void> {
    this.tableData.data = await this.projectService.cache;
  }

  dataSource = this.tableData;
  columnsToDisplay = ['name', 'language', 'active'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: project | null = null;

  loadContributors(repo: project) {
    this.contributorLoading = true;
    this.contributors = [];
    this.http.get(repo.contributors).pipe(
      switchMap(async (res) => { //converts Object data to array
        return await JSON.parse(JSON.stringify(res))
      }),
      switchMap(async (res) => { //converts array to right data type
        return await res.map((element: { login: any; html_url: any; avatar_url: any; }) => ({
          userName: element.login,
          userUrl: element.html_url,
          avatar: element.avatar_url
        }))
      }),
      tap(async t => console.log(await t)),
    ).subscribe((contributors: contributor[]) => {
      this.contributors = contributors
      this.contributorLoading = false
    })
  }

}
