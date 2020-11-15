import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PostModule } from '../models/post.module';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from "@angular/material/icon";

interface Post {
  key: string;
  title: string;
  imageurl: string;
  htmlcontent: string;
  createdstamp: number;
  modifiedstamp: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  raw_html = '';
  html: SafeHtml;
  getposts: AngularFireList<Post> = null;
  posts = [];
  showlist: boolean = true;
  visible = false;
  isfabopen = false;
  constructor(
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase,
    private matIconRegistry: MatIconRegistry
  ) { 
    // this.matIconRegistry.addSvgIcon(
    //   `facebook`,
    //   this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/facebook.svg')
    // );
    this.getposts = this.db.list('/posts')
  }

  ngOnInit(): void {
    // this.getposts.subscribe(data => {
    //   console.log(data)
    //   this.posts = data;
    //   this.posts.forEach(data => {
    //     console.log(data.payload.ref)
    //   })
    //   // this.db.list('posts').remove(this.posts[7])
    // })
    this.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      console.log(data);
      this.posts = data;
    });
    // this.raw_html = localStorage.getItem('html')
    // this.html = this.sanitizer.bypassSecurityTrustHtml(this.raw_html);
  }
  getAll(): AngularFireList<Post> {
    return this.getposts;
  }
  setpost(post) {
    this.html = this.sanitizer.bypassSecurityTrustHtml(post.htmlcontent);
    this.showlist = false;
  }
}
