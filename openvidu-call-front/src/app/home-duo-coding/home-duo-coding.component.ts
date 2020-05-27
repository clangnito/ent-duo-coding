import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


@Component({
  selector: 'app-home-duo-coding',
  templateUrl: './home-duo-coding.component.html',
  styleUrls: ['./home-duo-coding.component.css']
})
export class HomeDuoCodingComponent implements OnInit {

  public roomForm: FormControl;
  public version = require('../../../package.json').version;
  public url  = '';
  public isEnseignant = true;
  public idEtudiantOrProfSelect;
  public idEtudiantSelect;
  public nameEtudiantSelect;

  public topEtudiant: any = [];

  listeEnseignants = [
	{'id': 318962, 'name': 'Olivier Barais'},
  ];

  listeEtudiants = [
	{ 'id': 18013178, 'name': 'LANGNITO Constant' },
	{ 'id': 14013178, 'name': 'WOLOU Mickael' },
	{ 'id': 12013138, 'name': 'SIMON Irina' },
	{ 'id': 15013178, 'name': 'LAFONT Jeremy' },
	{ 'id': 16013178, 'name': 'SCRIMALI Gaetan' }
  ];

  constructor(private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute) {
	this.url = this.router.url;
	this.idEtudiantOrProfSelect = this.route.snapshot.params.id;
	let nom = '';
	const id = this.route.snapshot.params.id;
	this.listeEtudiants.forEach(function (value) {
		if (id == value.id) {
			nom = value.name;
		}
		});
	this.nameEtudiantSelect = nom;
  }

  ngOnInit(): void {

	let randomName;
	const nom = '';

	const re = /enseignant/gi;
	const re2 = /etudiant/;
	if (this.url.search(re) != -1) {
		this.isEnseignant = true;
		this.topEtudiant = this.listeEtudiants[0];
		this.nameEtudiantSelect = this.topEtudiant.name;
		randomName = this.topEtudiant.id + '-' + this.listeEnseignants[0].id;
	} else {

		//   this.idEtudiantSelect = this.route.snapshot.params.id;

		//   this.listeEtudiants.forEach(function (value) {
		//     if (this.idEtudiantSelect == value.id) {
		//      nom = value.name;
		//     }

		//  });
		//  this.nameEtudiantSelect = nom;

		this.isEnseignant = false;
		// this.topEtudiant = this.listeEtudiants[0];
		randomName = this.idEtudiantOrProfSelect + '-' + this.listeEnseignants[0].id;

	}

	// const randomName = "18083197-31097626";
	// const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals], separator: '-', });
	this.roomForm = new FormControl(randomName, [Validators.minLength(4), Validators.required]);
  }

  clickOnStudent(etudiant: any) {
	this.nameEtudiantSelect = etudiant.name;
	this.idEtudiantSelect = etudiant.id;
	this.idEtudiantOrProfSelect = 18013178;
	const randomName = etudiant.id + '-' + this.listeEnseignants[0].id;
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
