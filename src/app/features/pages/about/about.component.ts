import { Component } from '@angular/core';
import { CompanyComponent } from "../../../shared/components/company/company.component";
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { FeaturesSectionComponent } from "../../../shared/components/features-section/features-section.component";

@Component({
  selector: 'app-about',
  imports: [CompanyComponent, CompanyOverviewComponent, FeaturesSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  feature=[
    
  {
    shape:'rounded-full',
    icon: 'fa-solid fa-bullseye',
    title: 'Excellence',
    text: 'We strive for the highest quality in everything we do'
  },
  {shape:'rounded-full',
    icon: 'fa-regular fa-circle-check',
    title: 'Integrity',
    text: 'Transparent and honest business practices'   
  },
  {shape:'rounded-full',
    icon: 'fa-solid fa-award',
    title: 'Innovation ',
    text: 'Continuously improving our services and solutions'   

  },
  {shape:'rounded-full',
    icon: 'fa-regular fa-eye',
    title: 'Partnership',
    text: 'Building long-term relationships with our clients'   
  }
    
  ]



}
