import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBardComponent } from './components/side-bard/side-bard.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    SideBardComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
  ]
})
export class SharedModule { }
