import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProfileLinkKey = 'scholar' | 'researchgate' | 'scopus' | 'wos' | 'orcid';

interface IrfScholar {
  name: string;
  designation: string;
  department: string;
  shortDepartment: string;
  photo: string;
  research: string;
  status: 'completed' | 'pursuing';
  scholar?: string;
  researchgate?: string;
  scopus?: string;
  wos?: string;
  orcid?: string;
}

@Component({
  selector: 'app-irf-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './irf-page.html',
  styleUrl: './irf-page.css',
})
export class IrfPageComponent {
  protected readonly scholars: IrfScholar[] = [
    {
      name: 'S Akila',
      designation: 'Research Scholar',
      department: 'Department of Mathematics',
      shortDepartment: 'Department of Mathematics',
      photo: '/legacy/Faculty/akila1_irf.png',
      status: 'completed',
      research:
        'Differential Equations, Fractional Differential Equations, Numerical Analysis, Functional Analysis and Algebra.',
      scholar: 'https://scholar.google.com/citations?user=37RntQoAAAAJ&hl=en',
      orcid: 'https://orcid.org/0009-0000-8954-8109',
    },
    {
      name: 'A Thulasi',
      designation: 'Research Scholar',
      department: 'Department of Mathematics',
      shortDepartment: 'Department of Mathematics',
      photo: '/legacy/Faculty/Thulasi_irf.png',
      status: 'completed',
      research:
        'Artificial Intelligence in Civil Engineering, Machine Learning for construction Materials, Concrete Strength Prediction using AI.',
      researchgate: 'https://www.researchgate.net/profile/Thulasi-Rajkumar?ev=hdr_xprf',
    },
    {
      name: 'Savitha Saravanan',
      designation: 'Full-Time Research Scholar',
      department: 'Department of Nanoscience and Technology',
      shortDepartment: 'Nanoscience and Technology',
      photo: '/legacy/Faculty/savitha_irf.png',
      status: 'completed',
      research:
        'Green synthesis of nanoparticles and nanocomposites, nanostructured materials, photocatalysis, wastewater treatment, carbon-based functional materials, corrosion protection, and biological studies.',
      scholar: 'https://shorturl.at/PRJ5H',
      researchgate: 'https://www.researchgate.net/profile/Savitha-Saravanan?ev=hdr_xprf',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=56938495300',
      orcid: 'https://orcid.org/0009-0009-9300-6543',
    },
    {
      name: 'S Ranjitha',
      designation: 'Research Scholar',
      department: 'Department of Mathematics',
      shortDepartment: 'Mathematics',
      photo: '/legacy/Faculty/ranjitha_irf.png',
      status: 'completed',
      research:
        'Fluid dynamics, numerical analysis, computational analysis, micropolar fluids, boundary layer, nonlinear differential equations, numerical simulation, and MATLAB.',
      scholar: 'https://scholar.google.com/citations?user=-HEd0QEAAAAJ&hl=en&authuser=1',
      researchgate: 'https://www.researchgate.net/profile/Ranjitha-Sengotaiyan?ev=hdr_xprf',
      orcid: 'https://orcid.org/0000-0003-0634-7665',
    },
    {
      name: 'Athira A Nair',
      designation: 'Research Scholar',
      department: 'Department of Biotechnology',
      shortDepartment: 'Biotechnology',
      photo: '/legacy/Faculty/athira_irf.jpg',
      status: 'completed',
      research:
        'Antimicrobial resistance (AMR), microbial metagenomics, NGS, poultry-based AMR, environmental AMR, One Health, and AI and computational modelling of biological systems.',
      scholar: 'https://scholar.google.com/citations?user=cOBgWjkAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/profile/Athira-A-Nair?ev=hdr_xprf',
      orcid: 'https://orcid.org/0009-0000-1549-6609',
    },
    {
      name: 'A Oviya Darshni',
      designation: 'Research Scholar',
      department: 'Department of Chemistry',
      shortDepartment: 'Research Scholar',
      photo: '/legacy/Faculty/oviya_irf.png',
      status: 'completed',
      research: 'Energy storage materials, sensor materials, supercapacitor, green synthesis, catalysis, and electrochemistry.',
      scholar: 'https://scholar.google.com/citations?hl=en&user=PgCRMvAAAAAJ',
      orcid: 'https://orcid.org/0009-0008-8411-377X',
    },
  ];

  get completedScholars(): IrfScholar[] {
    return this.scholars.filter((s) => s.status === 'completed');
  }

  get pursuingScholars(): IrfScholar[] {
    return this.scholars.filter((s) => s.status === 'pursuing');
  }

  protected readonly profileIcons: Record<ProfileLinkKey, { label: string; icon: string }> = {
    scholar: {
      label: 'Google Scholar',
      icon: '/legacy/Profile/Google_Scholar_logo.svg.png',
    },
    researchgate: {
      label: 'ResearchGate',
      icon: '/legacy/Profile/Researchgate.png',
    },
    scopus: {
      label: 'Scopus',
      icon: '/legacy/Profile/Scopus.png',
    },
    wos: {
      label: 'Web of Science',
      icon: '/legacy/Profile/wos.png',
    },
    orcid: {
      label: 'ORCID',
      icon: '/legacy/Profile/orcid.png',
    },
  };

  protected readonly profileLinkKeys: ProfileLinkKey[] = [
    'scholar',
    'researchgate',
    'scopus',
    'wos',
    'orcid',
  ];

  protected selectedScholar: IrfScholar | null = null;
  protected readonly pageUpdated = 'Mar 23rd, 2026';

  protected openProfile(scholar: IrfScholar): void {
    this.selectedScholar = scholar;
  }

  protected closeProfile(): void {
    this.selectedScholar = null;
  }

  protected hasLink(scholar: IrfScholar, key: ProfileLinkKey): boolean {
    const value = scholar[key];
    return !!value && value !== '#';
  }
}
