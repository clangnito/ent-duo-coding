import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {Convergence} from '@convergence/convergence';

@Component({
  selector: 'app-tp-creation',
  templateUrl: './tp-creation.component.html',
  styleUrls: ['./tp-creation.component.css']
})
export class TpCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createModel(nomTP: string, contenuTP: string): void {

	const username = 'User-' + Math.round(Math.random() * 10000);
   const listeEtudiants = [
		{ 'id': 18013178, 'name': 'LANGNITO Constant' },
		{ 'id': 14013178, 'name': 'WOLOU Mickael' },
		{ 'id': 15013138, 'name': 'SIMON Irina' },
		{ 'id': 15013178, 'name': 'LAFONT Jeremy' },
		{ 'id': 16013178, 'name': 'SCRIMALI Gaetan' }
	];

		Convergence.connectAnonymously(environment.CONVERGENCE_URL, username)
			.then(d => {
			const domain: any = d;
			// Now open the model, creating it using the initial data if it does not exist.

		for (let i = 0; i < listeEtudiants.length; i++) {
		  const idModel = 'User-' + Math.round(Math.random() * 10000);
			domain.models().openAutoCreate({
			id: nomTP + '_' + listeEtudiants[i].id,
			collection: nomTP,
			ephemeral: true,
			data: {
				'nomDuTp': nomTP,
				'contenuTP': contenuTP
			}
			})
			.then((model) => {
				console.log('model open');
				// use the model
			})
			.catch((error) => console.log('Could not open the model', error));
		}
		});


}

}
