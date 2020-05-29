import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, SimpleChanges} from '@angular/core';
import {environment} from '../../environments/environment';
import {Convergence} from '@convergence/convergence';

declare const monaco: any;
@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit, AfterViewInit {
  @Input()
  numeroEtudiant: string;

  @Input()
  isEnseignant: boolean;

  topEtudiant: string ;

  @ViewChild('editor') editorRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.topEtudiant = '18013178';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges){
    this.topEtudiant = '18013178';
    if (this.isEnseignant && changes['numeroEtudiant'].isFirstChange()){
      this.numeroEtudiant = this.topEtudiant;
    }
    this.editor(this.numeroEtudiant);

  }


  editor(numeroEtudiant: string){
    (window as any).require.config({
      paths: {
        vs: '/vs',
        Convergence: '/convergence.amd.js',
        ConvergenceColorAssigner: '/color-assigner.js',
        MonacoConvergenceAdapter: './monaco-adapter.js',
        rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js'
      }
    });

    // Connect to the domain.  See ../config.js for the connection settings.

    const username = 'User-' + Math.round(Math.random() * 10000);

    (window as any).define(
      username,
      ['vs/editor/editor.main', 'Convergence', 'MonacoConvergenceAdapter'],
      (_, Convergence, MonacoConvergenceAdapter) => {
        //
        // Create the target editor where events will be played into.
        //
        if (numeroEtudiant === undefined){
          numeroEtudiant = this.topEtudiant;
        }

        const modelId = 'tptest_' + numeroEtudiant ;
        Convergence.connectAnonymously(environment.CONVERGENCE_URL, username)
          .then(d => {
            const domain: any = d;
            // Now open the model, creating it using the initial data if it does not exist.
            return domain.models().open(modelId);})
          .then((model) => {
            const defaultEditorContents = 'default declare var a = 4+5;';
            const modelContenu = model.elementAt('contenuTP');
            const editor = monaco.editor.create(this.editorRef.nativeElement, {
              value: modelContenu.value(),
              theme: 'vs-dark',
              language: 'javascript'
            });

            const adapter = new MonacoConvergenceAdapter(editor, model.elementAt('contenuTP'));
            adapter.bind();
          })
          .catch(error => {
            console.error('Could not open model ', error);
          });
      });

  }

  ngAfterViewInit(): void {
    this.editor(this.numeroEtudiant);
  }

}
