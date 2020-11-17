import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PostModule } from '../models/post.module';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from "@angular/material/icon";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
  isfabopen = false;
  isTablet: boolean;
  isMobile: boolean;
  viewport: string;

  constructor(
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase,
    private matIconRegistry: MatIconRegistry,
    public breakpointObserver: BreakpointObserver
  ) {
    // this.matIconRegistry.addSvgIcon(
    //   `facebook`,
    //   this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/facebook.svg')
    // );
    this.getposts = this.db.list('/posts')
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 1200px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
        this.isTablet = true;
        this.viewport = 'tablet';
      } else {
        this.isMobile = true;
        this.isTablet = false;
        this.viewport = 'phone';
      }
    });
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
