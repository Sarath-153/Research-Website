import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface RegulationItem {
  id: string;
  title: string;
  category: 'official' | 'amendment' | 'circular';
  year: string;
  description: string;
  fileSize: string;
  link: string;
  badgeText: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-phd-regulations-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './phd-regulations-page.html',
  styleUrl: './phd-regulations-page.css'
})
export class PhdRegulationsPageComponent {
  searchQuery = '';
  selectedCategory = 'all';

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }

  regulations: RegulationItem[] = [
    {
      id: 'reg-2020',
      title: 'Anna University Ph.D. Regulations 2020',
      category: 'official',
      year: '2020',
      description: 'Comprehensive guidelines covering eligibility, registration, coursework, research monitoring, and thesis submission for doctoral candidates.',
      fileSize: '1.8 MB (PDF)',
      link: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf',
      badgeText: 'Latest Official'
    },
    {
      id: 'reg-2015',
      title: 'Anna University Ph.D. Regulations 2015',
      category: 'official',
      year: '2015',
      description: 'Regulatory framework applicable for research scholars registered between 2015 and 2019.',
      fileSize: '1.4 MB (PDF)',
      link: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2015.pdf',
      badgeText: 'Archived'
    },
    {
      id: 'amendments',
      title: 'Anna University Research Amendments & Guidelines 2024',
      category: 'amendment',
      year: '2024',
      description: 'Latest amendments regarding publication mandates, plagiarism thresholds, and doctoral committee meeting protocols.',
      fileSize: '850 KB (PDF)',
      link: 'https://cfr.annauniv.edu/research/guidelines.php',
      badgeText: 'New Update'
    },
    {
      id: 'synopsis-guidelines',
      title: 'Guidelines for Preparation of Ph.D. Synopsis & Thesis',
      category: 'circular',
      year: '2023',
      description: 'Official formatting, citation style, binding, and submission standards mandated by the Centre for Research.',
      fileSize: '2.1 MB (PDF)',
      link: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf',
      badgeText: 'Formatting Standards'
    }
  ];

  highlights = [
    {
      icon: '⏱️',
      title: 'Program Duration',
      desc: 'Minimum 3 years for Full-Time and 4 years for Part-Time scholars; maximum tenure of 6 years.'
    },
    {
      icon: '🎓',
      title: 'Coursework Mandate',
      desc: 'Completion of 8 to 16 credits in approved coursework with a minimum CGPA of 7.0.'
    },
    {
      icon: '📝',
      title: 'Comprehensive Exam',
      desc: 'Oral & written examination conducted by the Doctoral Committee upon completing coursework.'
    },
    {
      icon: '📚',
      title: 'Publication Policy',
      desc: 'Minimum 2 papers in SCI/Scopus indexed journals required before thesis submission.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'What are the attendance requirements for Ph.D. scholars?',
      answer: 'Full-time research scholars must maintain a minimum of 80% attendance in every semester. Attendance records are reviewed by the Doctoral Committee during semi-annual progress evaluations.',
      isOpen: false
    },
    {
      question: 'How many credits of coursework are compulsory?',
      answer: 'Candidates with M.E./M.Tech qualification must complete at least 8 credits (typically 3 to 4 courses), while candidates entering with M.Sc./B.E. qualifications require 12 to 16 credits.',
      isOpen: false
    },
    {
      question: 'What is the maximum allowed similarity index for plagiarism check?',
      answer: 'The overall similarity index of the Ph.D. thesis must not exceed 10% (excluding self-citations and standard bibliography), strictly verified through anti-plagiarism tools approved by Anna University.',
      isOpen: false
    },
    {
      question: 'Can a scholar change their supervisor during the program?',
      answer: 'Yes, change of supervisor or inclusion of a joint supervisor is permissible under special circumstances subject to approval from the Director (Research), Anna University, upon recommendation by the Head of Institution.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  get filteredRegulations(): RegulationItem[] {
    return this.regulations.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}

