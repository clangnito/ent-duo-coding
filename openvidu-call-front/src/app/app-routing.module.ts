import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDuoCodingComponent } from './home-duo-coding/home-duo-coding.component';
import { HomeDuoCodingStudentComponent } from './home-duo-coding-student/home-duo-coding-student.component';
import { HomeEnterRoomComponent } from './home-enter-room/home-enter-room.component';
import { HomeChoiseProfileComponent } from './home-choise-profile/home-choise-profile.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { from } from 'rxjs';
import {TpCreationComponent} from '@app/tp-creation/tp-creation.component';

const routes: Routes = [
	{ path: 'home-openvidu', component: HomeComponent },
	{ path: '', component: HomeEnterRoomComponent },
	{ path: 'home-coding/enseignant/:id', component: HomeDuoCodingComponent },
	{ path: 'home-coding/etudiant/:id', component: HomeDuoCodingComponent },
	{ path: 'home-etudiant/:id', component: HomeDuoCodingStudentComponent },
	{ path: 'choise-profile', component: HomeChoiseProfileComponent },
	{ path: ':roomName', component: VideoRoomComponent },
	{ path: 'home-coding/tp-creation', component: TpCreationComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
