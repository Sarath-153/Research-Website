import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue?: string;
  category: string;
  status: 'Forthcoming' | 'Completed' | 'News';
  image?: string;
  description: string;
  highlights?: string[];
  organizer?: string;
  contact?: string;
}

@Component({
  selector: 'app-news-events-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-events-page.html',
  styleUrl: './news-events-page.css'
})
export class NewsEventsPageComponent {
  isGuidelinesOpen = false;
  isScholarsOpen = false;

  toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }

  latestNews: EventItem[] = [
    {
      id: 'south-zone-basketball-2025',
      title: 'South Zone Inter University Basketball (Men) Tournament – 2025',
      date: 'January 18–22, 2025',
      time: '08:30 AM – 06:00 PM IST',
      venue: 'Indoor Sports Stadium & Arena, KSRCT Campus',
      category: 'Sports & University Championship',
      status: 'News',
      image: '/legacy/shared/events/basketball_tournament_news.jpg',
      organizer: 'Department of Physical Education & Sports, K.S. Rangasamy College of Technology',
      description: 'K.S. Rangasamy College of Technology successfully hosted the prestigious South Zone Inter University Basketball (Men) Tournament 2025 under the auspices of the Association of Indian Universities (AIU). Over 64 premier university teams from across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana converged on the KSRCT campus for five exhilarating days of high-level basketball championship competition.',
      highlights: [
        'Over 64 leading universities competed across preliminary and knockout stages',
        'State-of-the-art indoor wooden courts and international-standard officiating',
        'Inaugurated by senior sports dignitaries, national basketball referees, and college leadership',
        'Championship trophies and All-India Inter-University tournament berths presented during the grand valedictory ceremony'
      ],
      contact: 'sports@ksrct.ac.in | 04288-274741'
    }
  ];

  upcomingEvents: EventItem[] = [
    {
      id: 'icecbi-2026',
      title: 'ICECBI – 2026 (International Conference on Engineering, Computing & Biomedical Innovations)',
      date: 'February 2–4, 2026',
      time: '09:00 AM – 05:00 PM IST',
      venue: 'Main Auditorium, KSRCT',
      category: 'Conference',
      status: 'Forthcoming',
      image: '/legacy/shared/events/icecbi_event_banner.jpg',
      organizer: 'Center for Research and Development (CFRD) in association with Circuit & Computing Departments',
      description: 'The International Conference on Engineering, Computing & Biomedical Innovations (ICECBI-2026) provides an international platform for researchers, academicians, and industry pioneers to exchange groundbreaking ideas and research findings in cutting-edge engineering paradigms, AI healthcare solutions, and computational biology.',
      highlights: [
        'Keynote addresses by prominent international academicians and researchers',
        'Peer-reviewed paper presentations published in Scopus-indexed proceedings',
        'Dedicated tracks for AI, IoT, Robotics, Biomedical Imaging, and Smart Materials',
        'Best Paper & Best Researcher Awards across all technical sessions'
      ],
      contact: 'conference@ksrct.ac.in | +91 94430 00000'
    },
    {
      id: 'afm-xrd-workshop',
      title: 'National Level Workshop on Advanced Characterization Techniques (AFM & XRD)',
      date: 'March 18, 2026',
      time: '10:00 AM – 04:30 PM IST',
      venue: 'CFRD Seminar Hall & Central Characterization Lab',
      category: 'Workshop',
      status: 'Forthcoming',
      image: '/legacy/shared/events/afm_workshop_banner.jpg',
      organizer: 'Center for Nano Science & Technology and Dept. of Mechanical Engineering',
      description: 'An intensive hands-on national workshop aimed at providing research scholars and faculty members with comprehensive practical exposure to modern surface characterization and crystallographic analysis using Atomic Force Microscopy (AFM) and X-Ray Diffraction (XRD) systems.',
      highlights: [
        'Fundamental and advanced theoretical sessions by senior instrumentation scientists',
        'Live demonstration of Innova SPM AFM System and XRD sample preparation',
        'Hands-on data analysis, peak indexing, crystallite size calculation, and roughness topography',
        'Certificates of participation with authorized practical training hours'
      ],
      contact: 'nanoresearch@ksrct.ac.in'
    },
    {
      id: 'fdp-grant-writing',
      title: 'Faculty Development Program on High-Impact Research & Grant Writing',
      date: 'April 10, 2026',
      time: '09:30 AM – 04:00 PM IST',
      venue: 'Research Advisory Center',
      category: 'FDP',
      status: 'Forthcoming',
      image: '/legacy/shared/events/fdp_grant_writing_banner.jpg',
      organizer: 'Research Advisory Committee & CFRD',
      description: 'A transformative faculty development workshop curated to empower teaching fraternity and early-career researchers with proven methodologies for targeting high-impact Q1/Q2 indexed journals and crafting compelling research proposals for premier national and international funding agencies (DST, SERB, DBT, CSIR, and AICTE).',
      highlights: [
        'Structuring competitive research grant proposals from ideation to submission',
        'Navigating reviewer expectations, budgeting justifications, and institutional endorsements',
        'Bibliometrics, citation enhancement, and strategic manuscript positioning',
        'Interactive proposal review clinic with experienced principal investigators'
      ],
      contact: 'research.advisory@ksrct.ac.in'
    }
  ];

  previousEvents: EventItem[] = [
    {
      id: 'maths-day-2025',
      title: 'National Mathematics Day – 2025',
      date: 'December 22, 2025',
      time: '10:00 AM – 03:30 PM IST',
      venue: 'KSRCT Campus',
      category: 'Celebration',
      status: 'Completed',
      description: 'Commemorating the birth anniversary of the legendary mathematician Srinivasa Ramanujan with special expert lectures on applied mathematical modeling, cryptography, and computational mathematics.',
      highlights: [
        'Invited lecture on differential equations in real-world fluid dynamics',
        'Student paper presentation symposium on computational discrete structures',
        'Distribution of Ramanujan Young Mathematician awards'
      ],
      organizer: 'Department of Mathematics & CFRD'
    },
    {
      id: 'indus-water-treaty',
      title: 'Seminar on the Implications of the Indus Water Treaty',
      date: 'December 15, 2025',
      time: '02:00 PM – 04:30 PM IST',
      venue: 'Department Seminar Hall',
      category: 'Seminar',
      status: 'Completed',
      description: 'An insightful technical and geopolitical seminar analyzing transboundary river governance, hydrological engineering challenges, and climate change impacts on water resource treaties.',
      highlights: [
        'Detailed hydrologic flow assessment of Himalayan basin rivers',
        'Legal and environmental treaty provisions under climate variability',
        'Open discussion forum with civil engineering scholars'
      ],
      organizer: 'Department of Civil Engineering'
    },
    {
      id: 'ipr-patent-workshop',
      title: 'Workshop on Intellectual Property Rights & Patent Filing Process',
      date: 'November 28, 2025',
      time: '09:30 AM – 04:00 PM IST',
      venue: 'Conference Hall',
      category: 'Workshop',
      status: 'Completed',
      description: 'Hands-on practical training session covering patent prior-art searches, drafting claims according to Indian Patent Office guidelines, and intellectual property commercialization strategies for universities.',
      highlights: [
        'Guidance on patentability criteria: novelty, inventive step, and industrial applicability',
        'Live demonstration of patent databases (IPO, Google Patents, Espacenet)',
        'Institutional facilitation support for filing through KSRCT IPR Cell'
      ],
      organizer: 'KSRCT IPR Cell & CFRD'
    }
  ];

  selectedEvent: EventItem | null = null;

  openEventDetails(event: EventItem): void {
    this.selectedEvent = event;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeEventDetails(): void {
    this.selectedEvent = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}

