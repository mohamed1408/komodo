import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostModule {
  key: string;
  title: string;
  imageurl: string;
  htmlcontent: string;
  createdstamp: number;
  modifiedstamp: number;
  exclusive: boolean;
  tags: Array<string>;
}