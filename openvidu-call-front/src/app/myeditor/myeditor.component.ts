import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import {environment} from '../../environments/environment';

declare const monaco: any;
@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editorRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
	(window as any).require.config({
		paths: {
		vs: '/vs',
		Convergence: '/convergence.amd.js',
		ConvergenceColorAssigner: '/libs/@convergence/color-assigner/umd/color-assigner.js',
		MonacoConvergenceAdapter: './monaco-adapter.js',
		rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js'
		}
	});

	// Connect to the domain.  See ../config.js for the connection settings.

	const username = 'User-' + Math.round(Math.random() * 10000);

	(window as any).define(
		'monaco-example',
		['vs/editor/editor.main', 'Convergence', 'MonacoConvergenceAdapter'],
		(_, Convergence, MonacoConvergenceAdapter) => {
		//
		// Create the target editor where events will be played into.
		//
		const initialtest = 'ngAfterViewInit(): void {\n' +
		'\t(window as any).require.config({\n' +
		'\t\tpaths: {\n' +
		'\t\tvs: \'/vs\',\n' +
		'\t\tConvergence: \'/convergence.amd.js\',\n' +
		'\t\tConvergenceColorAssigner: \'/libs/@convergence/color-assigner/umd/color-assigner.js\',\n' +
		'\t\tMonacoConvergenceAdapter: \'./monaco-adapter.js\',\n' +
		'\t\trxjs: \'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js\'\n' +
		'\t\t}\n' +
		'\t});';
		const editor = monaco.editor.create(this.editorRef.nativeElement, {
			value: initialtest,
			theme: 'vs-dark',
			language: 'javascript'
		});

		Convergence.connectAnonymously(environment.CONVERGENCE_URL, username)
			.then(d => {
			const domain: any = d;
			// Now open the model, creating it using the initial data if it does not exist.
			return domain.models().openAutoCreate({
				collection: 'example-monaco',
				id: 'dfdfdfedfsgd',
				data: {
				text: 'var observableProt;'
				}
			});
			})
			.then((model) => {
			const adapter = new MonacoConvergenceAdapter(editor, model.elementAt('text'));
			adapter.bind();
			// (window as any).exampleLoaded();
			})
			.catch(error => {
			console.error('Could not open model ', error);
			});
		});

  }

}
