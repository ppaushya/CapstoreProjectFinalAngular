/// chat.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatDialogComponent
  ], // <-- export here
})
export class ChatModule { }
