import { Component } from '@angular/core';
import { CompanyOverviewComponent } from "../../../shared/components/company-overview/company-overview.component";
import { FaqSection, QuestionComponent } from './question/question.component';
import { AnyQuestionComponent } from "./any-question/any-question.component";

@Component({
  selector: 'app-faq',
  imports: [CompanyOverviewComponent, QuestionComponent, AnyQuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
 faqSections: FaqSection[] = [
    {
      title: 'General Questions',
      items: [
        { question: 'What services does EgyWorkforce Solutions provide?', answer: 'We provide comprehensive workforce recruitment, project management, site management, operations support, compliance & legal services, and consulting services for foreign companies operating in Egypt.' },
        { question: 'How long has EgyWorkforce been in business?', answer: 'EgyWorkforce has been operating since 2010.' },
        { question: 'Which industries do you serve?', answer: 'We serve construction, oil & gas, healthcare, IT, and manufacturing industries.' },
        { question: 'Do you work with international clients?', answer: 'Yes, we work with clients from Europe, USA, and the Middle East.' }
      ]
    },    {
      title: 'Workforce & Recruitment',
      items: [
        { question: 'How quickly can you provide workers for a project?', answer: 'We can provide workers within 1-2 weeks depending on the requirements.' },
        { question: 'What types of workers can you provide?', answer: 'Skilled, semi-skilled, and unskilled labor, engineers, and project managers.' },
        { question: 'Do you handle background checks and verification?', answer: 'Yes, all workers go through verification and reference checks.' },
        { question: 'Can you provide training for workers?', answer: 'Yes, we offer on-site and off-site training programs.' }
      ]
    },
    {
      title: 'Project Management',
      items: [
        { question: 'What size projects can you manage?', answer: 'From small projects to large multi-site projects.' },
        { question: 'Do you provide on-site supervision?', answer: 'Yes, our project managers supervise all sites.' },
        { question: 'How do you ensure project quality?', answer: 'We implement quality control and regular audits.' }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { question: 'Do you help with work permits and visas?', answer: 'Yes, we assist with permits and visa applications.' },
        { question: 'Are you familiar with Egyptian labor laws?', answer: 'Yes, our legal team ensures compliance.' },
        { question: 'Do you handle payroll and tax matters?', answer: 'Yes, we manage payroll and taxes for workers.' }
      ]
    },
    {
      title: 'Pricing & Contracts',
      items: [
        { question: 'How do you structure your pricing?', answer: 'Pricing is project-based depending on scope and duration.' },
        { question: 'Do you offer flexible contract terms?', answer: 'Yes, we provide flexible contracts.' },
        { question: 'What is included in your service fees?', answer: 'Recruitment, training, management, and compliance services.' },
        { question: 'Are there minimum project requirements?', answer: 'Minimums depend on the project type and client.' }
      ]
    }
  ]
}
  