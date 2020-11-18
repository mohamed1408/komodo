import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module.js';
import { ErrorStateMatcher } from '@angular/material/core';
import 'froala-editor/js/plugins.pkgd.min.js';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PostModule } from '../models/post.module'
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';

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
  post = new PostModule();
  islight: boolean = true;
  showcode: boolean = false;
  imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      "contentChanged": () => {
      }
    },
    height: 500
  }
  posttitleFormControl = new FormControl('', [
    Validators.required
  ]);
  titleimageurlFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  // private animationItem: AnimationItem;

  // visible = true;
  // selectable = true;
  // removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {
    this.post.htmlcontent = localStorage.getItem('html');
    this.post.title = '';
    this.post.imageurl = '';
    this.post.htmlcontent = '';
    this.post.tags = [];
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.post.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.post.tags.indexOf(fruit);

    if (index >= 0) {
      this.post.tags.splice(index, 1);
    }
  }
  // options: AnimationOptions = {
  //   path: 'http://127.0.0.1:8080/notification.json',
  // };

  // animationCreated(animationItem: AnimationItem): void {
  //   this.animationItem = animationItem;
  // }
  // stop(): void {
  //   this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  // }
 
  // play(): void {
  //   this.ngZone.runOutsideAngular(() => this.animationItem.play());
  // }
  ngOnInit(): void {
    var tutorial = this.db.list('posts').valueChanges();
    tutorial.subscribe(data => {
      console.log(data);
    })
  }
  uploadpost() {
    console.log((this.post.title == '' || this.post.imageurl == '' || this.post.htmlcontent == ''))
    if (!(this.post.title == '' || this.post.imageurl == '' || this.post.htmlcontent == '')) {
      console.log(this.post)
      this.post.createdstamp = new Date().getTime();
      this.post.modifiedstamp = 0;
      var users = this.db.list('posts');
      users.push(this.post)
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
    localStorage.setItem('html', this.post.htmlcontent);
  }

}
