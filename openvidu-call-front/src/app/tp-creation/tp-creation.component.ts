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

		Convergence.connectAnonymously(environment.CONVERGENCE_URL, username)
			.then(d => {
			const domain: any = d;
			// Now open the model, creating it using the initial data if it does not exist.
			return domain.models().openAutoCreate({
		id: 'my-model-id',
		collection: 'myTP',
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
		});


}

}
