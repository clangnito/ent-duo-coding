import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MyeditorComponent} from '@app/myeditor/myeditor.component';
import {Convergence} from '@convergence/convergence';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home-duo-coding',
  templateUrl: './home-duo-coding.component.html',
  styleUrls: ['./home-duo-coding.component.css']
})
export class HomeDuoCodingComponent implements OnInit, AfterViewInit {
  @ViewChild('myeditorComponent') myEditorComponent: MyeditorComponent;

  public roomForm: FormControl;
  public version = require('../../../package.json').version;
  public url = '';
  public isEnseignant = true;
  public idEtudiantOrProfSelect;
  public idEtudiantSelect;
  public nameEtudiantSelect;
  public userConnectedId: any;
  public topEtudiant: any = [];
  currentDomain: any;
  currentTpId: any;
  currentModelId: any;
  currentUrl = '';

  listeEnseignants = [
	{'id': 318962, 'name': 'Olivier Barais'},
  ];

  listeEtudiants  = [
	{ 'id': 18013178, 'name': 'LANGNITO Constant' },
	{ 'id': 14013178, 'name': 'WOLOU Mickael' },
	{ 'id': 12013178, 'name': 'SIMON Irina' },
	{ 'id': 15013178, 'name': 'LAFONT Jeremy' },
	{ 'id': 16013178, 'name': 'SCRIMALI Gaetan' }
  ];
  private idProf: any;

  constructor(private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute) {

	this.url = this.router.url;
	this.idProf = this.route.snapshot.params.id;
	this.idEtudiantSelect = this.route.snapshot.params.idEtudiant;
	this.currentUrl = location.origin + '/#/home-coding/enseignant/' + this.idProf + '/';
	let nom = '';
	const id = this.route.snapshot.params.id;
	this.listeEtudiants.forEach(function (value) {
		if (id === value.id) {
		nom = value.name;
		}
	});
	this.nameEtudiantSelect = nom;
	this.currentTpId = 'tptest';

  }

  ngOnInit(): void {
	let randomName;
	const nom = '';

	const re = /enseignant/gi;
	const re2 = /etudiant/;
	if (this.url.search(re) !== -1) {
		this.isEnseignant = true;
		this.topEtudiant = this.listeEtudiants[0];
		this.nameEtudiantSelect = this.topEtudiant.name;
		randomName = this.topEtudiant.id + '-' + this.listeEnseignants[0].id;
		this.userConnectedId = this.listeEnseignants[0].id;
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
		randomName = this.idEtudiantSelect + '-' + this.listeEnseignants[0].id;
		this.userConnectedId = this.idEtudiantSelect;

	}
	Convergence.connectAnonymously(environment.CONVERGENCE_URL, this.userConnectedId)
		.then((domain) => {
		this.currentDomain = domain;
		console.log('Connection success');
		})
		.catch((error) => {
		console.log('Connection failure', error);
		});


	// const randomName = "18083197-31097626";
	// const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals], separator: '-', });
	this.roomForm = new FormControl(randomName, [Validators.minLength(4), Validators.required]);
  }

  ngAfterViewInit() {
  }

  clickOnStudent(etudiant: any) {
	this.nameEtudiantSelect = etudiant.name;
	const randomName = etudiant.id + '-' + this.listeEnseignants[0].id;
	this.roomForm = new FormControl(randomName, [Validators.minLength(4), Validators.required]);

	this.currentModelId = this.currentTpId + '_' + etudiant.id;
	this.myEditorComponent.reloadViewContent(this.currentDomain, this.currentModelId);
  }

  public goToVideoCall() {
	if (this.roomForm.valid) {
		const roomName = this.roomForm.value.replace(/ /g, '-'); // replace white spaces by -
		this.roomForm.setValue(roomName);
		this.router.navigate(['/', roomName]);
	}
  }

}
