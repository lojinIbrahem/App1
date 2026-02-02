import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { CtaActionComponent } from "../../../shared/components/cta-action/cta-action.component";
import { ProjectTabComponent } from './project-tab/project-tab.component';
import { ProjectsCategoriesComponent } from "./projects-categories/projects-categories.component";

@Component({
  selector: 'app-projects',
  imports: [CompanyOverviewComponent, CtaActionComponent, ProjectTabComponent, ProjectsCategoriesComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
paragraph=" Let's discuss how we can help bring your vision to life"


feature=[
  {
    imageUrl:'images/1.jfif',
    tab: 'Infrastructure',
    title: 'Cairo Metro Expansion Project',
    paragraph: 'Provided 500+ skilled workers and comprehensive project management for the expansion of Cairo Metro Line 4.',
    type:'International Transit Corp.',
    date:'2022-2024',
    location:'Cairo, Egypt',
    statement1:'Successfully recruited and managed 500+ workers',
    statement2:'Completed ahead of schedule',
    statement3:'Zero safety incidents',
    statement4:'Client satisfaction rating: 5/5'

  },
   {
    imageUrl:'images/4.jfif',
    tab: 'Manufacturing',
    title: 'Industrial Manufacturing Facility',
    paragraph: 'Full-cycle workforce solutions and operations management for a new 50,000 sqm manufacturing facility.',
    type:'Global Manufacturing Inc.',
    date:'2023-2024',
    location:'10th of Ramadan City',
    statement1:'300+ workers recruited and trained',
    statement2:'Facility operational in 8 months',
    statement3:'ISO compliance achieved',
    statement4:'25% cost savings vs. budget'

  },
     {
    imageUrl:'images/3.jfif',
    tab: 'Energy',
    title: 'Renewable Energy Solar Farm',
    paragraph: 'Workforce and project management for a 200MW solar power installation project.',
    type:'SolarTech International',
    date:'2023-Present',
    location:'1Aswan, Egypt',
    statement1:'200+ specialized technicians deployed',
    statement2:'On-track for Q2 2025 completion',
    statement3:'Advanced safety protocols implemented',
    statement4:'Local community employment: 80%'

  },
     {
    imageUrl:'images/photo-1758518731457-5ef826b75b3b.jfif',
    tab: 'Hospitality',
    title: 'Luxury Hotel Development',
    paragraph: 'Complete workforce recruitment and training for a new 5-star resort property.',
    type:'Hospitality Global Group',
    date:'2021-2023',
    location:'Sharm El Sheikh',
    statement1:'400+ hospitality staff recruited',
    statement2:'Comprehensive training program delivered',
    statement3:'Hotel opened on schedule',
    statement4:'95% staff retention rate'

  },
   {
    imageUrl:'images/photo-2.jfif',
    tab: 'Technology',
    title: 'Telecommunications Network Upgrade',
    paragraph: 'Nationwide deployment of technical teams for 5G infrastructure installation.',
    type:'TeleComm Solutions Ltd.',
    date:'2022-2023',
    location:'Nationwide',
    statement1:'150+ certified technicians deployed',
    statement2:'25 cities covered',
    statement3:'Completed 2 months ahead of schedule',
    statement4:'Zero service disruption'

  },
    {
    imageUrl:'images/2.jfif',
    tab: 'Petrochemical Plant Operations',
    title: 'Petrochemical Plant Operations',
    paragraph: 'Long-term workforce management and operations support for a major petrochemical facility.',
    type:'PetroGlobal Energy',
    date:'2020-Present',
    location:'Alexandria',
    statement1:'600+ employees managed',
    statement2:'HSE excellence maintained',
    statement3:'99.8% uptime achieved',
    statement4:'4+ years of successful partnership'

  },
  ]

}
