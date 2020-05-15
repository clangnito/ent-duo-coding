import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';



@Component({
  selector: 'app-home-duo-coding-student',
  templateUrl: './home-duo-coding-student.component.html',
  styleUrls: ['./home-duo-coding-student.component.css']
})
export class HomeDuoCodingStudentComponent implements OnInit {


  public roomForm: FormControl;
  public version = require('../../../package.json').version;
  public idEtudiant = 121 ;
  public nomEtudiant = "cons" ;
  
  
  listeEtudiants = [
    {"id":18013178,"name":"LANGNITO Constant "},
    {"id":14013178,"name":"WOLOU Mickael"},
    {"id":15013138,"name":"SIMON Irina"},
    {"id":15013178,"name":"LAFONT Jeremy"},
    {"id":16013178,"name":"SCRIMALI Gaetan"}
];
  constructor(private router: Router, public formBuilder: FormBuilder,private route: ActivatedRoute) {
    var nom= "";
    var id = this.route.snapshot.params.id;
    this.listeEtudiants.forEach(function (value) {
       if (id == value.id) {
        nom = value.name;
       }

  });
  this.nomEtudiant = nom;

   }

  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params.id;
    const randomName = this.idEtudiant+"-31097626";
  //   this.listeEtudiants.forEach(function (value) {
  //     this.nomEtudiant = value.name;
  // });
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
