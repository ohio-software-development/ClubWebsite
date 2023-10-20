import { Injectable } from '@angular/core';

export interface project {
  name: string,
  description: string,
  language: string,
  githubUrl: string,
  active: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: project[] = [
    {
      name: 'Checkers',
      description: 'Its checkers',
      language: 'Python',
      githubUrl: 'https://github.com/ohio-software-development/Checkers/tree/43e965d007fc2366b179a508fdbb98b4e40cc3f9',
      active: true
    },
    {
      name: 'Social Media TUI',
      description: 'Filler',
      language: 'Rust',
      githubUrl: 'https://github.com/ohio-software-development/SocialMediaHackathonTui',
      active: false
    }
  ]

}