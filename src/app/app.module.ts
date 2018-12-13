import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UiModule } from './ui/ui.module';
import { SliderModule } from 'angular-image-slider';
import { TrackComponent } from './track/track.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ChatService } from './chat.service';
import { ChatModule } from './chat/chat.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShowImageComponent } from './bag/show-image/show-image.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AppService } from './app.service';
import { InvoiceComponent } from './invoice/invoice.component';

export function hammerConfigFactory() {
  return () => {
    const config = new HammerGestureConfig();
    config.overrides = {
      swipe: {direction: Hammer.DIRECTION_ALL},
    };
    return config;
  };
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
    HeaderModule,
    FooterModule,
    SliderModule,
    RouterModule,
    ChatModule,
   
   
  ],
  declarations: [
    AppComponent,
    TrackComponent,
    InvoiceComponent,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useFactory: hammerConfigFactory(),
    },
    ChatService,
    AppService,
    

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
