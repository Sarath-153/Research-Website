import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vision-mission-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vision-mission-page.html',
  styleUrl: './vision-mission-page.css'
})
export class VisionMissionPageComponent {
  visionText = 'To become a leading hub for multidisciplinary research driving innovation and societal transformation.';
  missionText = 'Promote research excellence, support scholars and faculty, and foster collaboration with academia and industry.';
}
