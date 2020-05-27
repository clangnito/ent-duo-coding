import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input} from '@angular/core';
import {environment} from '../../environments/environment';

declare const monaco: any;
@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit, AfterViewInit {
  @Input()
  numeroEtudiant: string;

  @ViewChild('editor') editorRef: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
  }

   ngOnInit(): void {
	(window as any).require.config({
		paths: {
		vs: '/vs',
		Convergence: '/convergence.amd.js',
		ConvergenceColorAssigner: '/color-assigner.js',
		MonacoConvergenceAdapter: './monaco-adapter.js',
		rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js'
		}
	});

	// Connect to the domain .  See ../config.js for the connection settings.

	const username = 'User-' + Math.round(Math.random() * 10000);

	(window as any).define(
		'monaco-example2',
		['vs/editor/editor.main', 'Convergence', 'MonacoConvergenceAdapter'],
		(_, Convergence, MonacoConvergenceAdapter) => {
		//
		// Create the target editor where events will be played into.
		//


		const modelId = 'tptest_' + this.numeroEtudiant;
		Convergence.connectAnonymously(environment.CONVERGENCE_URL, username)
			.then(d => {
			const domain: any = d;
			// Now open the model, creating it using the initial data if it does not exist.
			return domain.models().open(modelId);
			})
			.then((model) => {
        const editor = monaco.editor.create(this.editorRef.nativeElement, {
          value: model.elementAt("contenuTP").value(),
          theme: 'vs-dark',
          language: 'javascript'
        });
			const adapter = new MonacoConvergenceAdapter(editor, model.elementAt('contenuTP'));
			adapter.bind();
			// (window as any).exampleLoaded();
			})
			.catch(error => {
			console.error('Could not open model ', error);
			});
		});

  }

}
