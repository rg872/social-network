import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';


import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    UserAvatarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DividerModule
  ],
  exports: [
    UserAvatarComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
