import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-downloads-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads-page.html',
  styleUrl: './downloads-page.css'
})
export class DownloadsPageComponent {
  downloads = [
    { title: 'Ph.D. Application Form', cat: 'Forms', size: '1.2 MB' },
    { title: 'Research Fellowship Guidelines & Claim Form', cat: 'IRF', size: '850 KB' },
    { title: 'Seed Money Project Proposal Format', cat: 'Grants', size: '600 KB' },
    { title: 'IMRG Guidelines & Claim Sheet', cat: 'Grants', size: '720 KB' }
  ];
}
