import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDuoCodingComponent } from './home-duo-coding/home-duo-coding.component';
import { HomeDuoCodingStudentComponent } from './home-duo-coding-student/home-duo-coding-student.component';
import { HomeEnterRoomComponent } from './home-enter-room/home-enter-room.component';
import { HomeChoiseProfileComponent } from './home-choise-profile/home-choise-profile.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { from } from 'rxjs';

const routes: Routes = [
	{ path: 'home-openvidu', component: HomeComponent },
	{ path: '', component: HomeEnterRoomComponent },
	{ path: 'home-enseignant', component: HomeDuoCodingComponent },
	{ path: 'home-etudiant/:id', component: HomeDuoCodingStudentComponent },
	{ path: 'choise-profile', component: HomeChoiseProfileComponent },
	{ path: ':roomName', component: VideoRoomComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
