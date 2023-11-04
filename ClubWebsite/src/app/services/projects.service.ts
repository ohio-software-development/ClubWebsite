import { Injectable, OnInit } from '@angular/core';
import { Octokit } from 'octokit';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

export interface project {
  name: string,
  description: string,
  language: string,
  githubUrl: string,
  // contributors: contributor[],
  contributors: string,
  active: boolean,
}

export interface contributor {
  userName: string,
  userUrl: string,
  avatar: string,
}

const octokit = new Octokit({
  auth: "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"
});

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  cache: Promise<project[]> = Promise.resolve([])

  constructor(private http: HttpClient) { }

  load(): void {
    this.cache = octokit.request("GET /orgs/{org}/repos", {
      org: 'ohio-software-development',
    }).then((result) => {

      let intermediate = result.data.map((projects) => ({
        name: projects.name ? projects.name : '',
        description: projects.description ? projects.description : '',
        language: projects.language ? projects.language : 'null',
        githubUrl: projects.html_url ? projects.html_url : '',
        contributors: projects.contributors_url ? projects.contributors_url : '',
        active: true,
      }));

      return intermediate
    })
  }

}