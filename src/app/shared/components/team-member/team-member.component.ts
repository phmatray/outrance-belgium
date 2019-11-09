import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() name: string;
  @Input() username: string;
  @Input() role: string;
  @Input() role2: string;
  @Input() picture: string;

  constructor() {
    this.name = '';
  }

  ngOnInit() {
  }

}
