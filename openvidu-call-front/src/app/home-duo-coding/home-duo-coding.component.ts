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
  public url  = "";
  public isEnseignant = true;
  public idEtudiantSelect;
  public nameEtudiantSelect;

  public topEtudiant:any=[];

  listeEnseignats = [
    {"id":318962,"name":"Olivier Barais"},
];

  listeEtudiants = [
    { "id": 18013178, "name": "LANGNITO Constant" },
    { "id": 14013178, "name": "WOLOU Mickael" },
    { "id": 15013138, "name": "SIMON Irina" },
    { "id": 15013178, "name": "LAFONT Jeremy" },
    { "id": 16013178, "name": "SCRIMALI Gaetan" }
  ];



  constructor(private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.url = this.router.url;
    this.idEtudiantSelect = this.route.snapshot.params.id;
    var nom= "";

    var id = this.route.snapshot.params.id;
    this.listeEtudiants.forEach(function (value) {
       if (id == value.id) {
        nom = value.name;
       }

    });
    this.nameEtudiantSelect = nom;

  }

  ngOnInit(): void {

    var randomName;
    var nom= "";

    var re = /enseignant/gi;
    if (this.url.search(re) != -1) {
      this.isEnseignant = true;
      this.topEtudiant = this.listeEtudiants[0];
      this.nameEtudiantSelect = this.topEtudiant.name
      randomName = this.topEtudiant.id + "-" + this.listeEnseignats[0].id;
    } else {

    //   this.idEtudiantSelect = this.route.snapshot.params.id;

    //   this.listeEtudiants.forEach(function (value) {
    //     if (this.idEtudiantSelect == value.id) {
    //      nom = value.name;
    //     }

    //  });
    //  this.nameEtudiantSelect = nom;

      this.isEnseignant = false;
      //this.topEtudiant = this.listeEtudiants[0];
      randomName = this.idEtudiantSelect + "-" + this.listeEnseignats[0].id;

    }


    //const randomName = "18083197-31097626";
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
