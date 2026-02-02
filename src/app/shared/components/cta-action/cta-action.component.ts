import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-action',
  imports: [RouterLink,CommonModule],
  templateUrl: './cta-action.component.html',
  styleUrl: './cta-action.component.scss'
})
export class CtaActionComponent {
  @Input() backgraund:string="bg-white hover:bg-gray-100 text-blue-600 ";
  @Input() textColorTitle!: string 
  @Input() textColorParagraph!: string 
  @Input() bgClass!: string 
  @Input() title!:string;
  @Input() paragraphCTA!:string;
  @Input() linkurlCTS!:string;
  @Input() linkCTA!:string;

}
