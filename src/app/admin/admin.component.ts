import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module.js';
import 'froala-editor/js/plugins.pkgd.min.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  htmlContent;
  showcode: boolean = false;
  islight: boolean = true;
  posttitle = '';
  public imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      "contentChanged": () => {
      }
    }
  }
  postobject = { title: '', htmlcontent: '', createdstamp: 0, modifiedstamp: 0 }
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var tutorial = this.db.list('posts').valueChanges();
    tutorial.subscribe(data => {
      console.log(data);
    })
  }
  uploadpost() {
    this.postobject = { title: this.posttitle, htmlcontent: this.htmlContent, createdstamp: new Date().getTime(), modifiedstamp: 0 }
  }
  setdata() {
    console.log(this.db)
    var users = this.db.list('posts');
    users.push({ name: "imtha1", statua: "none" })
  }

  getusers() {
    // return this.db.collection('users').get();
  }

}