import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


declare const monaco: any;

@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editorRef: ElementRef;
  username = 'User-' + Math.round(Math.random() * 10000);

  defaultEditorContents = 'declare var a = 4+5;gyilgygyg';
  editor: any;

  constructor() {
	(window as any).require.config({
		paths: {
		vs: '/vs',
		Convergence: '/convergence.amd.js',
		ConvergenceColorAssigner: '/color-assigner.js',
		MonacoConvergenceAdapter: './monaco-adapter.js',
		rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js'
		}
	});
  }

  ngOnInit(): void {

	/*
    (window as any).define(
      'monaco-example2',
      ['vs/editor/editor.main', 'MonacoConvergenceAdapter'],
      (_, MonacoConvergenceAdapter) => {
      //
      // Create the target editor where events will be played into.
      //
      this.editor = monaco.editor.create(this.editorRef.nativeElement, {
        value: this.defaultEditorContents,
        theme: 'vs-dark',
        language: 'javascript'
      });
  /*
      Convergence.connectAnonymously(environment.CONVERGENCE_URL, this.username)
      .then(d => {
        const domain: any = d;
        // Now open the model, creating it using the initial data if it does not exist.
        return domain.models().openAutoCreate({
        collection: 'example-monaco2',
        id: 'Id-12',
        data: {
          text: this.defaultEditorContents
        }
        });
      })
      .then((model) => {
        const adapter = new MonacoConvergenceAdapter(this.editor, model.elementAt('text'));
        adapter.bind();
        // (window as any).exampleLoaded();
      })
      .catch(error => {
        console.error('Could not open model ', error);
      });

      });
      // this.reloadViewContent();

   */
  }

  ngAfterViewInit(): void {
  }

  reloadViewContent(domain: any, currentModelId: any): void {
	// currentModelId = 'Id-12';
	(window as any).define(
	  currentModelId,
		['vs/editor/editor.main', 'MonacoConvergenceAdapter'],
		(_, MonacoConvergenceAdapter) => {

		domain.models()
			.open(currentModelId)
			.then((model) => {
		const value = model.elementAt('text').value();
		console.log('model open', value);
		if (this.editor) {
			this.editor.setValue(value);
		} else {
			this.editor = monaco.editor.create(this.editorRef.nativeElement, {
			value: value,
			theme: 'vs-dark',
			language: 'javascript'
			});
		}


			const adapter = new MonacoConvergenceAdapter(this.editor, model.elementAt('text'));
			adapter.bind();
			}).catch((error) => {
			console.log('Could not open the model', error);
		});
		});
  }

}
