import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-categories',
  imports: [CommonModule],
  templateUrl: './projects-categories.component.html',
  styleUrl: './projects-categories.component.scss'
})
export class ProjectsCategoriesComponent {

  @Input() features:{
    imageUrl:string;
    tab:string;
    title:string;
    paragraph:string;
    type:string;
    date:string;
    location:string;
    statement1:string;
    statement2:string;
    statement3:string;
    statement4:string
  }[]=[]

}
