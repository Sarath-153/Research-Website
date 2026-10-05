import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  latestNews = [
    { title: 'South Zone Inter University Basketball (Men) Tournament – 2025', org: 'Organized by K.S. Rangasamy College of Technology.' }
  ];

  upcomingEvents = [
    {
      title: 'ICECBI – 2026 (International Conference on Engineering, Computing & Biomedical Innovations)',
      date: 'February 2–4, 2026',
      venue: 'Main Auditorium, KSRCT',
      category: 'Conference'
    },
    {
      title: 'National Level Workshop on Advanced Characterization Techniques (AFM & XRD)',
      date: 'March 18, 2026',
      venue: 'CFRD Seminar Hall',
      category: 'Workshop'
    },
    {
      title: 'Faculty Development Program on High-Impact Research & Grant Writing',
      date: 'April 10, 2026',
      venue: 'Research Advisory Center',
      category: 'FDP'
    }
  ];

  previousEvents = [
    {
      title: 'National Mathematics Day – 2025',
      date: 'December 22, 2025',
      venue: 'KSRCT Campus',
      category: 'Celebration',
      summary: 'Commemorating Srinivasa Ramanujan with special expert lectures on applied mathematical modeling and computational techniques.'
    },
    {
      title: 'Seminar on the Implications of the Indus Water Treaty',
      date: 'December 15, 2025',
      venue: 'Department Seminar Hall',
      category: 'Seminar',
      summary: 'An insightful technical and geopolitical seminar conducted for faculty members and research scholars.'
    },
    {
      title: 'Workshop on Intellectual Property Rights & Patent Filing Process',
      date: 'November 28, 2025',
      venue: 'Conference Hall',
      category: 'Workshop',
      summary: 'Hands-on practical training session covering patent search, drafting guidelines, and commercialization strategies.'
    }
  ];
}

