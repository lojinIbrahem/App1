import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface FaqItem {
  question: string;
   answer?: string;
  isOpen?: boolean; 
}

export interface FaqSection {
  title: string;
  items: FaqItem[];
}


@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() sections: FaqSection[] = [];
  toggle(item: FaqItem) {
    item.isOpen = !item.isOpen;
  }
}
