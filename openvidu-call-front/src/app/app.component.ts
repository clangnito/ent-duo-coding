import { Component } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { GetdataService } from './getdata.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'OpenVidu Call';
}
