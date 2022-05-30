import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';


import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { HeaderComponent } from './header/header.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentGalleryComponent } from './content-gallery/content-gallery.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';



@NgModule({
  declarations: [
    UserAvatarComponent,
    HeaderComponent,
    ActionCardComponent,
    ContentCardComponent,
    ContentGalleryComponent,
    AuthDialogComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DividerModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    UserAvatarComponent,
    HeaderComponent,
    ActionCardComponent,
    ContentCardComponent,
    ContentGalleryComponent,
  ]
})
export class ComponentsModule { }
