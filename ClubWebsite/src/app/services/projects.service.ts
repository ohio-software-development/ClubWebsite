import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: project[] = [
    {
      name: 'Checkers',
      description: 'Its checkers',
      githubUrl: 'https://github.com/ohio-software-development/Checkers/tree/43e965d007fc2366b179a508fdbb98b4e40cc3f9',
      current: true
    },
    {
      name: 'Social Media TUI',
      description: 'Filler',
      githubUrl: 'https://github.com/ohio-software-development/SocialMediaHackathonTui',
      current: false
    }
  ]

}

export interface project {
  name: string,
  description: string,
  githubUrl: string,
  current: boolean,
}