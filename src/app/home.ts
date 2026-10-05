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
      title: 'DBT STAR, DSIR Recognised ISRO',
      image: '/legacy/shared/Anna University.jpeg',
    },
    {
      title: 'Affiliated to Anna University, Chennai',
      image: '/legacy/shared/Anna University.jpeg',
    },
    {
      title: 'Accredited by NAAC with A++ (CGPA: 3.56)',
      image: '/legacy/shared/Anna University.jpeg',
    },
    {
      title: '9 Courses Accredited by NBA under Tier-I',
      image: '/legacy/shared/Anna University.jpeg',
    },
    {
      title: '201–300 Band (Engineering Rankings 2024)',
      image: '/legacy/shared/Anna University.jpeg',
    },
    {
      title: '201–300 Band (Engineering Rankings 2024)',
      image: '/legacy/shared/Anna University.jpeg',
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
