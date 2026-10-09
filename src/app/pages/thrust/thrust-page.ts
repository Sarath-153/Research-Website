import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ThrustDepartment {
  name: string;
  image: string;
  areas: string[];
}

@Component({
  selector: 'app-thrust-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thrust-page.html',
  styleUrl: './thrust-page.css',
})
export class ThrustPageComponent {
  protected readonly departments: ThrustDepartment[] = [
    {
      name: 'Computer Science And Engineering',
      image: '/legacy/Thrust/cse.png',
      areas: ['Thrust areas will be updated.'],
    },
    {
      name: 'Electronics And Communication Engineering',
      image: '/legacy/Thrust/ECEE.webp',
      areas: [
        'Embedded Systems',
        'Deep Learning and Image Processing',
        'VLSI Design',
        'Communication and Networking',
        'Signal Processing',
      ],
    },
    {
      name: 'Mechanical Engineering',
      image: '/legacy/Thrust/mech.jpg',
      areas: ['Composite Materials', 'Welding Technology', 'Alternative Fuels', 'Tribology'],
    },
    {
      name: 'Artificial Intelligence And Data Science',
      image: '/legacy/Thrust/AIDSLOGOCOVER.jpg',
      areas: ['Data Science', 'Deep Technology', 'Automation', 'Data Analytics & Visualization'],
    },
    {
      name: 'Civil Engineering',
      image: '/legacy/Thrust/CE.jpg',
      areas: [
        'Construction Materials',
        'Hydrology and Water Resources',
        'Water and Wastewater Treatment',
        'Structural Health Monitoring',
      ],
    },
    {
      name: 'Mechatronics Engineering',
      image: '/legacy/Thrust/mecha.jpg',
      areas: ['Drone Technology', 'Electric Vehicle', 'FMEA in Industries', 'Nano Fluids'],
    },
    {
      name: 'Chemistry',
      image: '/legacy/Thrust/chem.jpg',
      areas: [
        'Natural Products',
        'Food Formulations',
        'Nano Materials',
        'Environmental Chemistry',
        'Fuel Cell',
        'Photomaterials',
        'Medicinal Chemistry',
      ],
    },
    {
      name: 'Food Technology',
      image: '/legacy/Thrust/ft.avif',
      areas: [
        'Food Processing and Engineering',
        'New Product Development and Innovation',
        'Food Packaging Technology',
        'Food Chemistry and Microbiology',
        'Food Testing, Formulations and Preservations',
        'Beverage Technology',
      ],
    },
    {
      name: 'MBA',
      image: '/legacy/Thrust/mbaa.jpg',
      areas: [
        'Fintech & Digital Finance',
        'Working Capital & MSME',
        'Corporate Finance',
        'Neuro Marketing & Customer Experience',
        'Consumer Behaviour in Digital Platforms',
        'Research on E-commerce',
        'Stress Management',
      ],
    },
    {
      name: 'Computer Science And Business System',
      image: '/legacy/Thrust/csbs01.webp',
      areas: ['Machine Learning', 'Deep Learning', 'Computer Networks'],
    },
    {
      name: 'EE(VLSIDT)',
      image: '/legacy/Thrust/vlsi.webp',
      areas: ['Low Power VLSI Design', 'Machine Learning and Image Processing'],
    },
    {
      name: 'Information Technology',
      image: '/legacy/Thrust/informationtech.jpg',
      areas: [
        'Artificial Intelligence',
        'Data Analytics',
        'Deep Learning',
        'Wireless Networking',
        'Internet of Things',
        'Cloud Computing',
      ],
    },
    {
      name: 'Textile Technology',
      image: '/legacy/Thrust/textile1.jpg',
      areas: ['Technical Textile'],
    },
    {
      name: 'CSE (AIML)',
      image: '/legacy/Thrust/ml.jpg',
      areas: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision and Image Processing',
        'Natural Language Processing',
        'Data Analytics',
      ],
    },
    {
      name: 'Electrical and Electronics Engineering',
      image: '/legacy/Thrust/eee.jpg',
      areas: [
        'Power Systems & Smart Grids',
        'Control & Automation',
        'Power Electronics & Drives',
        'Embedded Systems & IoT',
      ],
    },
    {
      name: 'Physics',
      image: '/legacy/Thrust/phy.jpg',
      areas: ['Material Science', 'Luminescence', 'Energy Storage Devices'],
    },
    {
      name: 'Mathematics',
      image: '/legacy/Thrust/Mathematics.jpg',
      areas: [
        'Mathematical Modeling',
        'Differential Equations',
        'Fluid Dynamics',
        'Fuzzy Image Processing',
        'Fuzzy Algebra',
      ],
    },
    {
      name: 'English',
      image: '/legacy/Thrust/ENGLISH.png',
      areas: ['Indian Writing in English', 'English Language Teaching'],
    },
    {
      name: 'Master Of Computer Application (MCA)',
      image: '/legacy/Thrust/MCA-image.png',
      areas: [
        'Artificial Intelligence & Machine Learning',
        'Agentic AI',
        'Data Science',
        'Cloud Computing & DevOps',
        'Full Stack Development',
        'Computational Biology',
      ],
    },
    {
      name: 'Nano Science And Technology',
      image: '/legacy/Thrust/Nano Technology.png',
      areas: [
        'Carbon-Based Nanomaterials and Nanocomposites',
        'Thermal Barrier and Protective Coatings',
        'Anticorrosion and Antibacterial Surface Engineering',
        'Green Catalysis and Sustainable Chemistry',
        'Nanomaterials for Water Purification and Wastewater Treatment',
        'Energy Storage Materials',
        'CO2 Capture, Conversion and Utilization',
        'Tissue Engineering and Nanobiomaterials',
      ],
    },
    {
      name: 'BioTechnology',
      image: '/legacy/Thrust/BIO_TECHNOLOGY.png',
      areas: ['Thrust areas will be updated.'],
    },
    {
      name: 'Tamil',
      image: '/legacy/Thrust/Tamil.png',
      areas: ['Thrust areas will be updated.'],
    },
  ];

  protected readonly pageUpdated = 'Dec 22nd, 2025';

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
