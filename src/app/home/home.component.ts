import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  raw_html = '';
  html: SafeHtml;
  getposts = this.db.list('posts').valueChanges();
  posts = [];
  showlist: boolean = true;
  constructor(
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.getposts.subscribe(data => {
      console.log(data)
      this.posts = data;
    })
    // this.raw_html = localStorage.getItem('html')
    // this.html = this.sanitizer.bypassSecurityTrustHtml(this.raw_html);
  }

  setpost(post) {
    this.html = this.sanitizer.bypassSecurityTrustHtml(post.htmlcontent);
    this.showlist = false;
  }
}
