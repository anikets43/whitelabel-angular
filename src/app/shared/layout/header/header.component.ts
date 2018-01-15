import { AppSessionService } from './../../session/app-session.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  logoUrl = '';
  constructor(private session: AppSessionService) {
  }

  ngOnInit() {
    this.logoUrl = this.session.user.icon;
  }
}
