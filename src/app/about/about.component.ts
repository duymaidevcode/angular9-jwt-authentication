import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { UploadAdapter } from '../shared/services/services/UploadAdapter';
import { HttpClient } from '@angular/common/http';

// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

// const Context = ClassicEditor.Context;
// const Editor = ClassicEditor.Editor;
// const ContextWatchdog = ClassicEditor.ContextWatchdog;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  http: HttpClient;
  public Editor = ClassicEditor;
  // public Editor = DecoupledEdtor;
  public isDisabled = false;

  // public editor = Editor;
  //   public watchdog: any;
  //   public ready = false;
  public onReady( eventData ) {
    eventData.plugins.get('FileRepository').createUploadAdapter = (loader)=> {
      return new UploadAdapter(loader);
    }};
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //     editor.ui.view.toolbar.element,
    //     editor.ui.getEditableElement()
    // )};
    toggleDisabled() {
        this.isDisabled = !this.isDisabled
    }
  constructor() { }

  ngOnInit(): void {
    
  }
  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}
}
