import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  members: member[] = [{
    first: 'Brady',
    last: 'Phelps',
    description: 'King',
    imageUrl: 'https://static.independent.co.uk/2023/09/08/00/fc288a241f3ea59a3ea3d8d809ac810dY29udGVudHNlYXJjaGFwaSwxNjk0MTg3MTg2-2.72063964.jpg'
   },
   {
    first: 'Kaleb',
    last: 'Demaline',
    description: 'Yoker',
    imageUrl: 'https://d.newsweek.com/en/full/1533775/joaquin-phoenix-joker-dc-universe.jpg?w=1600&h=1200&l=62&t=34&q=88&f=d650baa84ecc86d8d6175f6a8ff7ecda'
   },
   {
    first: 'Noah',
    last: 'Fox',
    description: 'Skinny',
    imageUrl: 'https://imgix.bustle.com/wmag/2019/04/03/5ca4ba3b6d7f1b2de77b8c2c_IMG_947D07F25F48-1.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg'
   },
   {
    first: 'Nick',
    last: 'Cunningham',
    description: 'White boy',
    imageUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e6ea475a-59bc-4a19-1f6b-0560654cb600/width=450/00061-2032949314.jpeg'
   }
  ]

  selectedMember: member = this.members[0]

}

export interface member{
  first:string,
  last: string
  description:string,
  imageUrl: string,
}
