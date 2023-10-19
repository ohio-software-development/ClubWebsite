import { Component } from '@angular/core';
import { MembersService, member } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  members: member[] = this.memberService.members.sort(
    (a, b) => (a.first > b.first) ? 1 : (a.first < b.first) ? -1 : (a.last < b.last) ? 1 : (a.last > b.last) ? -1 : 0)


 constructor(private memberService: MembersService){}

}
