import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-choise-profile',
  templateUrl: './home-choise-profile.component.html',
  styleUrls: ['./home-choise-profile.component.css']
})
export class HomeChoiseProfileComponent implements OnInit {

  listeEtudiants = [
    {"id":18013178,"name":"LANGNITO Constant "},
    {"id":14013178,"name":"WOLOU Mickael"},
    {"id":15013138,"name":"SIMON Irina"},
    {"id":15013178,"name":"LAFONT Jeremy"},
    {"id":16013178,"name":"SCRIMALI Gaetan"}
];

  constructor() { }

  ngOnInit(): void {
  }

}
