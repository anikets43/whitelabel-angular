import { AppSessionService } from './../../session/app-session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  blogUrl = '';
  constructor(private session: AppSessionService) { }

  ngOnInit() {

    this.blogUrl = this.session.user.blogUrl;
  }

}
