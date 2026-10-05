import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Course {
  code: string;
  title: string;
  category: 'core' | 'elective' | 'ethics';
  department: string;
  credits: number;
  semester: string;
  description: string;
  syllabusLink: string;
  isMandatory: boolean;
}

@Component({
  selector: 'app-phd-coursework-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './phd-coursework-page.html',
  styleUrl: './phd-coursework-page.css'
})
export class PhdCourseworkPageComponent {
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

  courses: Course[] = [
    {
      code: 'RPE2021',
      title: 'Research & Publication Ethics',
      category: 'ethics',
      department: 'Interdisciplinary',
      credits: 2,
      semester: 'Semester I',
      description: 'Philosophy and ethics, scientific conduct, publication misconduct, databases and research metrics.',
      syllabusLink: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf',
      isMandatory: true
    },
    {
      code: 'RM2021',
      title: 'Research Methodology & Technical Writing',
      category: 'core',
      department: 'General Engineering',
      credits: 4,
      semester: 'Semester I',
      description: 'Research design, data collection, statistical analysis, hypothesis testing, latex formatting & patent drafting.',
      syllabusLink: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf',
      isMandatory: true
    },
    {
      code: 'CSE3012',
      title: 'Advanced Machine Learning & Deep Neural Networks',
      category: 'elective',
      department: 'Computer Science & Engineering',
      credits: 3,
      semester: 'Semester I / II',
      description: 'Convolutional networks, transformers, reinforcement learning, optimization algorithms & model deployment.',
      syllabusLink: '#',
      isMandatory: false
    },
    {
      code: 'ECE3045',
      title: 'VLSI Architectures for AI & Edge Computing',
      category: 'elective',
      department: 'Electronics & Comm. Engg.',
      credits: 3,
      semester: 'Semester I / II',
      description: 'Low-power IC design, hardware accelerators, Neuromorphic architecture & FPGA prototyping.',
      syllabusLink: '#',
      isMandatory: false
    },
    {
      code: 'EEE3089',
      title: 'Smart Microgrids & Renewable Energy Integration',
      category: 'elective',
      department: 'Electrical & Electronics Engg.',
      credits: 3,
      semester: 'Semester I / II',
      description: 'Power quality analysis, grid-tied inverters, battery management systems & IoT monitoring.',
      syllabusLink: '#',
      isMandatory: false
    },
    {
      code: 'MEC3067',
      title: 'Additive Manufacturing & Advanced Biomaterials',
      category: 'elective',
      department: 'Mechanical Engineering',
      credits: 3,
      semester: 'Semester I / II',
      description: '3D printing technologies, biocompatible alloys, finite element analysis & surface engineering.',
      syllabusLink: '#',
      isMandatory: false
    }
  ];

  timelineSteps = [
    {
      step: '01',
      title: 'Coursework Approval',
      desc: 'Doctoral Committee prescribes courses based on candidate background & research domain.'
    },
    {
      step: '02',
      title: 'CFR Registration',
      desc: 'Register selected courses with Centre for Research (CFR) Anna University within deadline.'
    },
    {
      step: '03',
      title: 'Classes & Continuous Eval',
      desc: 'Attend regular classes with minimum 80% attendance and complete continuous assessments.'
    },
    {
      step: '04',
      title: 'Comprehensive Exam',
      desc: 'Appear for semester-end written examinations and secure minimum B grade in all courses.'
    }
  ];

  get filteredCourses(): Course[] {
    return this.courses.filter(course => {
      const matchesSearch = course.code.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            course.department.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || course.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}

