import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  svgs = [
    { path: "../assets/icons/social/facebook-box.svg", name: "facebook-box" },
    { path: "../assets/icons/social/facebook-messenger.svg", name: "facebook-messenger" },
    { path: "../assets/icons/social/facebook.svg", name: "facebook" },
    { path: "../assets/icons/social/github.svg", name: "github" },
    { path: "../assets/icons/social/google-maps-old.svg", name: "google-maps-old" },
    { path: "../assets/icons/social/google-plus.svg", name: "google-plus" },
    { path: "../assets/icons/social/google-plus-fill.svg", name: "google-plus-fill" },
    { path: "../assets/icons/social/google-plus-color.svg", name: "google-plus-color" },
    { path: "../assets/icons/social/instagram.svg", name: "instagram" },
    { path: "../assets/icons/social/linkedin.svg", name: "linkedin" },
    { path: "../assets/icons/social/medium-old.svg", name: "medium-old" },
    { path: "../assets/icons/social/pinterest.svg", name: "pinterest" },
    { path: "../assets/icons/social/play-button.svg", name: "play-button" },
    { path: "../assets/icons/social/reddit.svg", name: "reddit" },
    { path: "../assets/icons/social/reddit-color.svg", name: "reddit-color" },
    { path: "../assets/icons/social/stack-overflow.svg", name: "stack-overflow" },
    { path: "../assets/icons/social/stack-overflow-color.svg", name: "stack-overflow-color" },
    { path: "../assets/icons/social/tiktok.svg", name: "tiktok" },
    { path: "../assets/icons/social/tumblr.svg", name: "tumblr" },
    { path: "../assets/icons/social/twitter-squared-100.png", name: "twitter-squared-100.png" },
    { path: "../assets/icons/social/twitter-squared.svg", name: "twitter-squared" },
    { path: "../assets/icons/social/twitter.svg", name: "twitter" },
    { path: "../assets/icons/social/whatsapp.svg", name: "whatsapp" },
    { path: "../assets/icons/social/wordpress.svg", name: "wordpress" }
  ]
  visible = false;

  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.svgs.forEach(svg => {
      this.matIconRegistry.addSvgIcon(
        svg.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(svg.path)
      );
    })
  }
}
