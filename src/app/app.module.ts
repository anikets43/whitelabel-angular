import { Injector, NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import { PopulatedCartRouteGuard } from './route-gaurds/populated-cart.route-gaurd';
import { DeliveryOptionsDataService } from './services/delivery-options.service';
import { ProductsDataService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { LocalStorageServie, StorageService } from './services/storage.service';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AppSessionService } from './shared/session/app-session.service';

import * as $ from 'jquery';

export function appInitializerFactory(injector: Injector) {
  return () => {

    return new Promise<boolean>((resolve, reject) => {
      let appSessionService: AppSessionService = injector.get(AppSessionService);
      appSessionService.init().then((data: any) => {
        // Checks whether tenant is whitelabelled
        if (appSessionService.isWhiteLabelInstance) {
          $('head').append('<link id="TenantCustomCss"  href="' + './assets/css/' + data.externalCSS + '" rel="stylesheet"/>');
        }
        resolve(true);
      });
    });
  };
}


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector],
      multi: true
    },
    AppSessionService,
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
