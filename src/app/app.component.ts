import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstModel: any = {
    details: '<p>nothing inserted yet.</p><p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>'
  };
  public model: any = {
    details: '<p>nothing inserted yet.</p><p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>'
  };
  name = 'Angular';

  froalaOptions: Object = {
    charCounterCount: false,
    fileUpload: false,
    attribution: false,
    toolbarButtons: [
      ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
      ['fontFamily', 'fontSize', 'backgroundColor', 'textColor'],
      ['paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertImage', 'embedly',
        'insertTable', 'insertLink'],
      ['specialCharacters', 'insertHR', 'clearFormatting'],
      ['print', 'spellChecker'],
      ['undo', 'redo']],
    toolbarSticky: false,
    language: 'de',
    fontFamily: {
      'Arial,Helvetica,sans-serif': 'Arial',
      '\'Courier New\',Courier,monospace': 'Courier New',
      'Georgia,serif': 'Georgia',
      'Impact,Charcoal,sans-serif': 'Impact',
      '\'Lucida Console\',Monaco,monospace': 'Lucida Console',
      'Tahoma,Geneva,sans-serif': 'Tahoma',
      '\'Times New Roman\',Times,serif': 'Times New Roman',
      'Verdana,Geneva,sans-serif': 'Verdana',
    },
    events: {
      'froalaEditor.image.beforeUpload': function (e, editor, files) {
        if (files.length) {
          // Create a File Reader.
          const reader = new FileReader();

          // Set the reader to insert images when they are loaded.
          reader.onload = function (eLoad) {
            const result = (<any>(eLoad.target)).result;
            editor.image.insert(result, null, null, editor.image.get());
          };

          // Read image as base64.
          reader.readAsDataURL(files[0]);
        }

        editor.popups.hideAll();

        // Stop default upload chain.
        return false;
      },
      'contentChanged': () => {
        // Nothing
        //console.log('contentChanged', this.model.details);
      }
    },
  };

  newModel() {
    this.model = {
    };
  }
}
