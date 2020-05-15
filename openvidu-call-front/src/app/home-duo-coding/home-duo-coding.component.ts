import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


@Component({
  selector: 'app-home-duo-coding',
  templateUrl: './home-duo-coding.component.html',
  styleUrls: ['./home-duo-coding.component.css']
})
export class HomeDuoCodingComponent implements OnInit {

  public roomForm: FormControl;
  public version = require('../../../package.json').version;
  
  listeEtudiants = [
    {"id":18013178,"name":"LANGNITO Constant "},
    {"id":14013178,"name":"WOLOU Mickael"},
    {"id":15013138,"name":"SIMON Irina"},
    {"id":15013178,"name":"LAFONT Jeremy"},
    {"id":16013178,"name":"SCRIMALI Gaetan"}
];
  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const randomName = "18083197-31097626";
		//const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals], separator: '-', });
		this.roomForm = new FormControl(randomName, [Validators.minLength(4), Validators.required]);
  }

  public goToVideoCall() {
		if (this.roomForm.valid) {
			const roomName = this.roomForm.value.replace(/ /g, '-'); // replace white spaces by -
			this.roomForm.setValue(roomName);
			this.router.navigate(['/', roomName]);
		}
	}

}
