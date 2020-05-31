import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  listeEnseignats = [
    {"id":318962,"name":"Olivier Barais"},
];

  listeEtudiants = [
    {"id":18013178,"name":"LANGNITO Constant "},
    {"id":14013178,"name":"WOLOU Mickael"},
    {"id":12013178,"name":"SIMON Irina"},
    {"id":15013178,"name":"LAFONT Jeremy"},
    {"id":16013178,"name":"SCRIMALI Gaetan"}
];

  constructor() {
    this.listeEtudiants = [
      {"id":18013178,"name":"LANGNITO Constant "},
      {"id":14013178,"name":"WOLOU Mickael"},
      {"id":12013178,"name":"SIMON Irina"},
      {"id":15013178,"name":"LAFONT Jeremy"},
      {"id":16013178,"name":"SCRIMALI Gaetan"}
  ];


   }

  getListeEtudiant() {
    return this.listeEtudiants;
  }
}
