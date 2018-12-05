import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataService } from './data/data.service';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UiModule } from './ui/ui.module';
import { SliderModule } from 'angular-image-slider';
import { TrackComponent } from './track/track.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';


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
    RouterModule
   
   
   
  ],
  declarations: [
    AppComponent,
    TrackComponent,
  ],
  providers: [
    DataService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useFactory: hammerConfigFactory(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
