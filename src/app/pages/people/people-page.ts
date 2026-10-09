import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProfileLinkKey = 'scholar' | 'researchgate' | 'scopus' | 'wos' | 'orcid';

interface Person {
  name: string;
  designation: string;
  department: string;
  shortDepartment: string;
  email: string;
  photo: string;
  research: string;
  scholar?: string;
  researchgate?: string;
  scopus?: string;
  wos?: string;
  orcid?: string;
}

@Component({
  selector: 'app-people-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './people-page.html',
  styleUrl: './people-page.css',
})
export class PeoplePageComponent {
  protected readonly people: Person[] = [
    {
      name: 'Dr. M Kathirselvam',
      designation: 'Associate Professor',
      department: 'Department of Mechanical Engineering',
      shortDepartment: 'Mechanical Engineering',
      email: 'mkathirselvam@ksrct.ac.in',
      photo: '/legacy/Faculty/Kathirselvam Sir.png',
      research:
        'Nonlinear Differential Equations, Fractional Differential Equations, Epidemiological Modeling, Infectious Disease, Asymptotic Methods, Numerical Analysis, Proposed Iterative Techniques, Artificial Neural Network & Machine Learning.',
      scholar: 'https://scholar.google.com/citations?user=o44SYXYAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/profile/Kathirselvam-Muthusamy',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=56392988900',
      wos: 'https://www.webofscience.com/wos/author/record/ABG-4891-2020',
      orcid: 'https://orcid.org/0000-0002-4142-3937',
    },
    {
      name: 'Dr. A Karthik',
      designation: 'Associate Professor',
      department: 'Department of Nano Science and Technology',
      shortDepartment: 'Nano Science and Technology',
      email: 'karthik@ksrct.ac.in',
      photo: '/legacy/Faculty/Karthik Sir.png',
      research:
        '2D Materials and Nanocomposites, High-Temperature Corrosion, Green Catalysis, Wastewater Treatment, Supercapacitors and Batteries, CO2 Conversion and Adsorption.',
      scholar: 'https://scholar.google.com/citations?user=9UPZ6zwAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/profile/Karthik-Arumugam-4?ev=hdr_xprf',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=56912053300',
      wos: 'https://www.webofscience.com/wos/author/record/AAU-8724-2020',
      orcid: 'https://orcid.org/0000-0002-8835-0528',
    },
    {
      name: 'Dr. Kavitha Kandiah',
      designation: 'Associate Professor',
      department: 'Department of FoodTechnology',
      shortDepartment: 'Food Technology',
      email: 'kkavitha07@gmail.com',
      photo: '/legacy/Faculty/Kavitha Mam.png',
      research:
        'Polymer Nanocomposites, Nanobiomaterials and Bone Regeneration, In-vitro and In-vivo Toxicology, Microbial Biocompounds and Synbiotic Formulations in Food, Sustainable Carbon Derivatives, Energy Storage Applications, 3D Bioprinting, Biosensors.',
      scholar: 'https://scholar.google.com/citations?user=ODd7GqQAAAAJ',
      researchgate: 'https://www.researchgate.net/profile/Kavitha-Kandiah?ev=hdr_xprf',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=58563885600',
      wos: 'https://www.webofscience.com/wos/author/record/HHM-4869-2022',
      orcid: 'https://orcid.org/0000-0003-1711-1535',
    },
    {
      name: 'Dr. V P Devarajan',
      designation: 'Assistant Professor',
      department: 'Department of Physics',
      shortDepartment: 'Physics',
      email: 'vpdevarajanbu@gmail.com',
      photo: '/legacy/Faculty/Devarajan sirr.jpeg',
      research:
        'Quantum Materials and Inorganic-Organic Hybrids, Multifunctional Quantum Dots and Nanostructures, White LEDs, Chemical Sensors and Supercapacitors, Hydrogen Production and Photocatalysis, Biolabeling and Cell Targeting.',
      scholar: 'https://scholar.google.com/citations?user=W0Ve0csAAAAJ',
      researchgate: 'https://www.researchgate.net/profile/Devarajan-V-P',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=55403430000',
      wos: 'https://www.webofscience.com/wos/author/record/F-1117-2016',
      orcid: 'https://orcid.org/0000-0003-4223-8589',
    },
    {
      name: 'Dr. R Satheeshkumar',
      designation: 'Assistant Professor',
      department: 'Department of Chemistry',
      shortDepartment: 'Chemistry',
      email: 'satheeshkumarr@ksrct.ac.in',
      photo: '/legacy/Faculty/Satheesh Sir.png',
      research:
        "Synthetic organic chemistry, multistep synthetic approaches, medicinal chemistry, iron chelators for the treatment of Alzheimer's disease.",
      scholar: 'https://scholar.google.com/citations?user=64Y5lHEAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/profile/Satheeshkumar-Rajendran',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=58726994500',
      wos: 'https://www.webofscience.com/wos/author/record/F-3684-2016',
      orcid: 'https://orcid.org/0000-0001-8492-286X',
    },
    {
      name: 'Dr. U Nithiyanantham',
      designation: 'Assistant Professor',
      department: 'Department of Physics',
      shortDepartment: 'Physics',
      email: 'anandnithi22@gmail.com',
      photo: '/legacy/Faculty/nithi sir.png',
      research:
        'Nano and composite materials for energy storage and conversion applications, dye-sensitised solar cells (DSSCs), thermal energy storage, thermoelectric devices, supercapacitors.',
      scholar:
        'https://scholar.google.com/citations?hl=en&user=G7H4TYMAAAAJ&view_op=list_works&sortby=pubdate',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=55931734500',
      orcid: 'https://orcid.org/0000-0001-5969-7883',
    },
    {
      name: 'Dr. N Jeeva',
      designation: 'Assistant Professor',
      department: 'Department of Mathematics',
      shortDepartment: 'Mathematics',
      email: 'jeevapirc2405@gmail.com',
      photo: '/legacy/Faculty/Jeeva Sir.jpeg',
      research:
        'Nonlinear Differential Equations, Fractional Differential Equations, Epidemiological Modeling, Infectious Disease, Asymptotic Methods, Numerical Analysis, Proposed Iterative Techniques, Artificial Neural Network and Machine Learning.',
      scholar: 'https://scholar.google.com/citations?user=GgVkX4wAAAAJ&hl=en&authuser=1',
      researchgate: 'https://www.researchgate.net/profile/N-Jeeva/research',
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=58802985900',
      wos: 'https://www.webofscience.com/wos/author/record/JPK-6185-2023',
      orcid: 'https://orcid.org/0009-0001-9674-4658',
    },
  ];

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

  protected selectedPerson: Person | null = null;
  protected readonly pageUpdated = 'Dec 22nd, 2025';

  protected openProfile(person: Person): void {
    this.selectedPerson = person;
  }

  protected closeProfile(): void {
    this.selectedPerson = null;
  }

  protected hasLink(person: Person, key: ProfileLinkKey): boolean {
    const value = person[key];
    return !!value && value !== '#';
  }
}
