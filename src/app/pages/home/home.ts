import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsItem {
  text: string;
  link: string;
}

interface Recognition {
  title: string;
  image: string;
}

interface PublicationStat {
  count: string;
  label: string;
}

interface PublicationGroup {
  category: string;
  logo?: string;
  stats: PublicationStat[];
}

interface GrantBreakdown {
  count: string;
  title: string;
  agencies: string;
}

interface GrantOverview {
  totalAmount: string;
  totalLabel: string;
  totalSub: string;
  breakdown: GrantBreakdown[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  protected readonly newsItems: NewsItem[] = [
    {
      text: 'International Conference on AI & Data Science - Jan 2026',
      link: '/news_events.html',
    },
    {
      text: 'MoU Signed with IIT Madras',
      link: '/news_events.html',
    },
    {
      text: 'South Zone Inter University Basketball (Men) Tournament - 2025',
      link: '/news_events.html',
    },
    {
      text: 'MoU Signed with IIT Madras',
      link: '/news_events.html',
    },
  ];

  protected readonly recognitions: Recognition[] = [
    {
      title: 'Department of Science and Technology (DST)',
      image: '/legacy/shared/dst_logo.png',
    },
    {
      title: 'All India Council for Technical Education (AICTE)',
      image: '/legacy/shared/aicte_logo.png',
    },
    {
      title: 'National Technical Textiles Mission (NTTM)',
      image: '/legacy/shared/nttm_logo.png',
    },
    {
      title:
        'Department of Scientific and Industrial Research - Scientific and Industrial Research Organisation (DSIR-SIRO)',
      image: '/legacy/shared/dsir_logo.png',
    },
    {
      title: 'Tamil Nadu State Council for Science and Technology (TNSCST)',
      image: '/legacy/shared/tnscst_logo.png',
    },
    {
      title: 'Indian Science Technology and Engineering facilities Map (I-STEM)',
      image: '/legacy/shared/istem_logo.png',
    },
  ];

  protected readonly publications: PublicationGroup[] = [
    {
      category: 'Scopus',
      logo: '/legacy/Profile/Scopus.png',
      stats: [
        { count: '36+', label: 'Articles Published' },
        { count: '450+', label: 'UGC-CARE Journals' },
        { count: '20+', label: 'Conference Proceedings' },
      ],
    },
    {
      category: 'Web of Science',
      logo: '/legacy/Profile/wos.png',
      stats: [
        { count: '64+', label: 'Articles Indexed' },
        { count: '64+', label: 'Completed Studies' },
        { count: '64+', label: 'Total Citations' },
      ],
    },
  ];

  protected readonly grantData: GrantOverview = {
    totalAmount: '₹36+ Cr',
    totalLabel: 'Total Research Grants',
    totalSub: 'Sanctioned Extramural & Sponsored Funding',
    breakdown: [
      {
        count: '120+',
        title: 'Government Projects',
        agencies: 'DST, DBT, SERB, AICTE & DRDO',
      },
      {
        count: '85+',
        title: 'Industry Sponsored',
        agencies: 'Corporate R&D & Industrial Consultancies',
      },
      {
        count: '40+',
        title: 'Ongoing Schemes',
        agencies: 'Active Research Grants in Execution',
      },
    ],
  };

  protected readonly ipStats: PublicationGroup[] = [
    {
      category: 'Patents',
      stats: [
        { count: '36+', label: 'Published & Filed' },
        { count: '450+', label: 'Patent Disclosures' },
        { count: '20+', label: 'Commercialized' },
      ],
    },
    {
      category: 'Copyrights',
      stats: [
        { count: '64+', label: 'Registered Works' },
        { count: '64+', label: 'Software & Designs' },
        { count: '64+', label: 'Total Protected' },
      ],
    },
  ];
}
