import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface DownloadItem {
  id: string;
  title: string;
  cat: 'Forms' | 'Grants' | 'IRF' | 'Templates';
  size: string;
  format: 'PDF' | 'DOCX';
  date: string;
  description: string;
  fileUrl: string;
}

export interface CircularItem {
  id: string;
  refNo: string;
  title: string;
  date: string;
  cat: 'Review Meeting' | 'Reports' | 'FDP' | 'Fellowship' | 'Grants' | 'Academic';
  isNew?: boolean;
  summary: string;
  fileUrl: string;
}

@Component({
  selector: 'app-downloads-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './downloads-page.html',
  styleUrl: './downloads-page.css'
})
export class DownloadsPageComponent implements OnInit, OnDestroy {
  activeTab: 'downloads' | 'circulars' = 'downloads';
  searchQuery: string = '';
  selectedCategory: string = 'all';
  private routerSub?: Subscription;

  readonly downloads: DownloadItem[] = [
    {
      id: 'd1',
      title: 'Ph.D. Application & Registration Form',
      cat: 'Forms',
      size: '1.2 MB',
      format: 'PDF',
      date: 'Updated Jan 2025',
      description: 'Official application format for Full-Time and Part-Time Ph.D. scholars under Anna University.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd2',
      title: 'Research Fellowship Guidelines & Claim Form',
      cat: 'IRF',
      size: '850 KB',
      format: 'PDF',
      date: 'Updated Dec 2024',
      description: 'Monthly fellowship attendance log, work progress report, and stipend disbursement claim format.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd3',
      title: 'Seed Money Project Proposal Format (SMP-2025)',
      cat: 'Grants',
      size: '640 KB',
      format: 'DOCX',
      date: 'Updated Nov 2024',
      description: 'Official application template with budget breakdown for internal institutional seed research grants.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd4',
      title: 'IMRG Guidelines & Claim Sheet',
      cat: 'Grants',
      size: '720 KB',
      format: 'PDF',
      date: 'Updated Oct 2024',
      description: 'Internal Minor Research Grant expenditure claim form and reimbursement summary proforma.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd5',
      title: 'Doctoral Committee (DC) Meeting Panel Recommendation Form',
      cat: 'Forms',
      size: '520 KB',
      format: 'PDF',
      date: 'Updated Feb 2025',
      description: 'Format for doctoral committee meeting convenor minutes, subject selection, and panel endorsement.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd6',
      title: 'Ph.D. Semester Progress Report Template',
      cat: 'Templates',
      size: '480 KB',
      format: 'DOCX',
      date: 'Updated Jan 2025',
      description: 'Mandatory half-yearly research output statement, publication log, and supervisor endorsement sheet.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd7',
      title: 'Synopsis & Thesis Submission Clearance Checklist',
      cat: 'Forms',
      size: '920 KB',
      format: 'PDF',
      date: 'Updated Mar 2025',
      description: 'Comprehensive compliance checklist and certificates of genuineness required before thesis dispatch.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'd8',
      title: 'Plagiarism Check & Anti-Plagiarism Verification Certificate',
      cat: 'Templates',
      size: '430 KB',
      format: 'PDF',
      date: 'Updated Jan 2025',
      description: 'Verification clearance statement certifying similarity score under permissible thresholds via URKUND/Turnitin.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    }
  ];

  readonly circulars: CircularItem[] = [
    {
      id: 'c1',
      refNo: 'KSRCT/CRFD/CIR/2025/112',
      title: 'Circular regarding Research Review Meeting',
      date: '22 December 2025',
      cat: 'Review Meeting',
      isNew: true,
      summary: 'All approved Ph.D. research supervisors and registered scholars are instructed to attend the bi-annual Research Review Meeting.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'c2',
      refNo: 'KSRCT/CRFD/CIR/2025/108',
      title: 'Circular on Submission of Project Reports',
      date: '18 December 2025',
      cat: 'Reports',
      isNew: true,
      summary: 'Principal investigators of ongoing Seed Money and IMRG schemes must submit their interim progress report and statement of accounts.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'c3',
      refNo: 'KSRCT/CRFD/CIR/2025/104',
      title: 'Circular for Faculty Development Programme (FDP)',
      date: '10 December 2025',
      cat: 'FDP',
      isNew: false,
      summary: 'Intimation and registration invitation for the intensive 5-day FDP on Modern Scientific Research Methods & High-Impact Publishing.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'c4',
      refNo: 'KSRCT/CRFD/CIR/2025/099',
      title: 'Circular on Institutional Research Fellowship (IRF) Application Call',
      date: '28 November 2025',
      cat: 'Fellowship',
      isNew: false,
      summary: 'Applications are invited from full-time Ph.D. scholars admitted under Anna University for KSRCT Institutional Research Fellowships.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'c5',
      refNo: 'KSRCT/CRFD/CIR/2025/094',
      title: 'Circular regarding Seed Money Grant Proposals for AY 2025-26',
      date: '15 November 2025',
      cat: 'Grants',
      isNew: false,
      summary: 'Invitation of project proposals under Institutional Seed Funding to cultivate preliminary research findings for external funding.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    },
    {
      id: 'c6',
      refNo: 'KSRCT/CRFD/CIR/2025/088',
      title: 'Circular on Mandatory Anti-Plagiarism Screening Norms',
      date: '20 October 2025',
      cat: 'Academic',
      isNew: false,
      summary: 'Strict adherence to Anna University guidelines on plagiarism verification prior to synopsis and thesis evaluation.',
      fileUrl: 'https://cfr.annauniv.edu/research/regulations/PhD-Regulations-2020.pdf'
    }
  ];

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.detectActiveTab();
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.detectActiveTab();
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  detectActiveTab(): void {
    const url = this.router.url.toLowerCase();
    if (url.includes('circular')) {
      this.activeTab = 'circulars';
    } else {
      this.activeTab = 'downloads';
    }
  }

  setTab(tab: 'downloads' | 'circulars'): void {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.selectedCategory = 'all';
    this.searchQuery = '';
    const targetUrl = tab === 'downloads' ? '/downloads.html' : '/circular.html';
    this.location.go(targetUrl);
  }

  get filteredDownloads(): DownloadItem[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.downloads.filter(item => {
      const matchesCat = this.selectedCategory === 'all' || item.cat === this.selectedCategory;
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }

  get filteredCirculars(): CircularItem[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.circulars.filter(item => {
      const matchesCat = this.selectedCategory === 'all' || item.cat === this.selectedCategory;
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.refNo.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }
}
