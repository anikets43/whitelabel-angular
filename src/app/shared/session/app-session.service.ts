import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class AppSessionService {
  private _user: any;
  private _tenant: any;
  private _application: any;
  private _isWhiteLabelInstance: boolean;

  get application() {
    return this._application;
  }

  get user() {
    return this._user;
  }

  get userId(): number {
    return this.user ? this.user.id : null;
  }

  get isWhiteLabelInstance(): boolean {
    return this.user.isWhiteLabelInstance ? this.user.isWhiteLabelInstance : null;
  }

  get tenant() {
    return this._tenant;
  }

  get tenantId(): number {
    return this.tenant ? this.tenant.id : null;
  }


  init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      $.ajax({
        url: '/assets/appconfig.json',
        method: 'GET'
      }).done((result) => {
        // this._application = result.application;
        this._user = result.data;
        // this._tenant = result.tenant;
        resolve(result.data);
      });

    });
  }

}
