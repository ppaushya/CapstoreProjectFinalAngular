import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { SlidermainpageComponent } from '../slidermainpage/slidermainpage.component';
import { ChatDialogComponent } from '../chat/chat-dialog/chat-dialog.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    KitOverlayModule,
    UiModule,
    
    NgxHmCarouselModule,

    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  declarations: [
    HomePageComponent,
    SlidermainpageComponent,
    
    
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule {
}
