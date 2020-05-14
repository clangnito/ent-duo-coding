import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDuoCodingComponent } from './home-duo-coding/home-duo-coding.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { from } from 'rxjs';

const routes: Routes = [
	{ path: 'home-openvidu', component: HomeComponent },
	{ path: '', component: HomeDuoCodingComponent },
	{ path: ':roomName', component: VideoRoomComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
