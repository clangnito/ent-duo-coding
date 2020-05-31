import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MonacoConvergenceAdapter} from '../../MonacoConvergenceAdapter';


declare const monaco: any;

@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editorRef: ElementRef;
  username = 'User-' + Math.round(Math.random() * 10000);
  editor: any;
  currentModel: any;
  adapter: any;

  constructor() {
	(window as any).require.config({
		paths: {
		vs: '/vs',
		Convergence: '/convergence.amd.js',
		ConvergenceColorAssigner: '/color-assigner.js',
		rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js'
		}
	});
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  reloadViewContent(domain: any, currentModelId: any): void {
	if (this.currentModel) {
	  this.currentModel.close();
	}
		domain.models()
			.open(currentModelId)
			.then((model) => {
			  this.currentModel = model;
		const value = this.currentModel.elementAt('text').value();
		console.log('model open : Value ===> ', value);
		if (this.editor) {
		this.editor.setValue(value);
		} else {
			this.editor = monaco.editor.create(this.editorRef.nativeElement, {
			value: value,
			theme: 'vs-dark',
			language: 'javascript'
			});
		}

			this.adapter = new MonacoConvergenceAdapter(this.editor, this.currentModel.elementAt('text'));
			this.adapter.bind();
			}).catch((error) => {
			console.log('Could not open the model', error);
		});
  }

}
