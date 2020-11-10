import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module.js';
import { ErrorStateMatcher } from '@angular/material/core';
import 'froala-editor/js/plugins.pkgd.min.js';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  htmlContent;
  postobject;
  posttitle = '';
  titleimageurl = '';
  islight: boolean = true;
  showcode: boolean = false;
  imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      "contentChanged": () => {
      }
    }
  }
  posttitleFormControl = new FormControl('', [
    Validators.required
  ]);  
  titleimageurlFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute
  ) {
    this.htmlContent = localStorage.getItem('html')
  }

  ngOnInit(): void {
    var tutorial = this.db.list('posts').valueChanges();
    tutorial.subscribe(data => {
      console.log(data);
    })
  }
  uploadpost() {
    if (!(this.matcher)) {
      this.postobject = { title: this.posttitle, imageurl: this.titleimageurl, htmlcontent: this.htmlContent, createdstamp: new Date().getTime(), modifiedstamp: 0 }
      var users = this.db.list('posts');
      // users.push(this.postobject)
    }
  }
  setdata() {
    console.log(this.db)
    var users = this.db.list('posts');
    users.push({ name: "imtha1", statua: "none" })
  }

  getusers() {
    // return this.db.collection('users').get();
  }
  savehtml() {
    localStorage.setItem('html', this.htmlContent);
  }

}
