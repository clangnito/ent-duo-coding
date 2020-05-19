import { Component, OnInit } from '@angular/core';
import { GetdataService } from '.././getdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-choise-profile',
  templateUrl: './home-choise-profile.component.html',
  styleUrls: ['./home-choise-profile.component.css']
})
export class HomeChoiseProfileComponent implements OnInit {

  listeEnseignats = [
    {"id":318962,"name":"Olivier Barais"},
];

  listeEtudiants = [
    {"id":18013178,"name":"LANGNITO Constant "},
    {"id":14013178,"name":"WOLOU Mickael"},
    {"id":15013138,"name":"SIMON Irina"},
    {"id":15013178,"name":"LAFONT Jeremy"},
    {"id":16013178,"name":"SCRIMALI Gaetan"}
];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.getDataService.getListeEtudiant);
  }

}
