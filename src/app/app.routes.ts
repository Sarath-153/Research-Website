import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PeoplePageComponent } from './pages/people/people-page';
import { ThrustPageComponent } from './pages/thrust/thrust-page';
import { FacilitiesPageComponent } from './pages/facilities/facilities-page';
import { IrfPageComponent } from './pages/irf/irf-page';
import { VisionMissionPageComponent } from './pages/vision-mission/vision-mission-page';
import { ResearchPageComponent } from './pages/research/research-page';
import { NewsEventsPageComponent } from './pages/news-events/news-events-page';
import { PhdRegulationsPageComponent } from './pages/phd-regulations/phd-regulations-page';
import { PhdCourseworkPageComponent } from './pages/phd-coursework/phd-coursework-page';
import { PhdSupervisorPageComponent } from './pages/phd-supervisor/phd-supervisor-page';
import { PhdAwardedPageComponent } from './pages/phd-awarded/phd-awarded-page';
import { PhdPursuingPageComponent } from './pages/phd-pursuing/phd-pursuing-page';
import { ConsultancyPageComponent } from './pages/consultancy/consultancy-page';
import { DownloadsPageComponent } from './pages/downloads/downloads-page';
import { SeedMoneyPageComponent } from './pages/seed-money/seed-money-page';
import { ImrgPageComponent } from './pages/imrg/imrg-page';
import { ResearchAdvisoryPageComponent } from './pages/research-advisory/research-advisory-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Sample.html', redirectTo: '/', pathMatch: 'full' },

  // People
  { path: 'people', component: PeoplePageComponent },
  { path: 'people.html', component: PeoplePageComponent },

  // Vision & Mission
  { path: 'vision-mission', component: VisionMissionPageComponent },
  { path: 'vision-mission.html', component: VisionMissionPageComponent },
  { path: 'vision_mission.html', component: VisionMissionPageComponent },

  // Thrust Areas
  { path: 'thrust-areas', component: ThrustPageComponent },
  { path: 'thrust-areas.html', component: ThrustPageComponent },
  { path: 'thrust_areas.html', component: ThrustPageComponent },

  // Facilities
  { path: 'facilities', component: FacilitiesPageComponent },
  { path: 'facilities.html', component: FacilitiesPageComponent },
  { path: 'Facilities.html', component: FacilitiesPageComponent },

  // Research Centers
  { path: 'research', component: ResearchPageComponent },
  { path: 'Research.html', component: ResearchPageComponent },
  { path: 'phd_centers.html', redirectTo: '/research', pathMatch: 'full' },

  // News & Events
  { path: 'news-events', component: NewsEventsPageComponent },
  { path: 'news-events.html', component: NewsEventsPageComponent },
  { path: 'news_events.html', component: NewsEventsPageComponent },

  // Research Advisory Committee
  { path: 'research-advisory-committee', component: ResearchAdvisoryPageComponent },
  { path: 'research-advisory-committee.html', component: ResearchAdvisoryPageComponent },
  { path: 'research_advisory_committee.html', component: ResearchAdvisoryPageComponent },

  // IRF
  { path: 'fellowship-irf', component: IrfPageComponent },
  { path: 'fellowship-irf.html', component: IrfPageComponent },
  { path: 'fellowship_irf.html', component: IrfPageComponent },

  // Seed Money
  { path: 'fellowship-seedmoney', component: SeedMoneyPageComponent },
  { path: 'fellowship-seedmoney.html', component: SeedMoneyPageComponent },
  { path: 'fellowship_seedmoney.html', component: SeedMoneyPageComponent },

  // IMRG
  { path: 'imrg', component: ImrgPageComponent },
  { path: 'imrg.html', component: ImrgPageComponent },
  { path: 'Imrg.html', component: ImrgPageComponent },
  { path: 'IMRG.HTML', component: ImrgPageComponent },

  // Doctoral Research
  { path: 'doctoral-research', redirectTo: '/phd-regulations', pathMatch: 'full' },
  { path: 'doctoral_research.html', redirectTo: '/phd-regulations', pathMatch: 'full' },

  // Ph.D Regulations & Guidelines
  { path: 'guidelines', redirectTo: '/phd-regulations', pathMatch: 'full' },
  { path: 'phd-guidelines', redirectTo: '/phd-regulations', pathMatch: 'full' },
  { path: 'phd_guidelines.html', redirectTo: '/phd-regulations', pathMatch: 'full' },
  { path: 'phd-regulations', component: PhdRegulationsPageComponent },
  { path: 'phd-regulations.html', component: PhdRegulationsPageComponent },
  { path: 'phd_regulations.html', component: PhdRegulationsPageComponent },

  // Ph.D Coursework
  { path: 'phd-coursework', component: PhdCourseworkPageComponent },
  { path: 'phd-coursework.html', component: PhdCourseworkPageComponent },
  { path: 'phd_coursework.html', component: PhdCourseworkPageComponent },

  // Ph.D Supervisor
  { path: 'phd-supervisor', component: PhdSupervisorPageComponent },
  { path: 'phd-supervisor.html', component: PhdSupervisorPageComponent },
  { path: 'phd_supervisor.html', component: PhdSupervisorPageComponent },

  // Ph.D Awarded / Completed / Scholars
  { path: 'scholars', redirectTo: '/phd-awarded', pathMatch: 'full' },
  { path: 'phd-scholars', redirectTo: '/phd-awarded', pathMatch: 'full' },
  { path: 'phd_scholars.html', redirectTo: '/phd-awarded', pathMatch: 'full' },
  { path: 'phd-awarded', component: PhdAwardedPageComponent },
  { path: 'phd-awarded.html', component: PhdAwardedPageComponent },
  { path: 'phd_awarded.html', component: PhdAwardedPageComponent },
  { path: 'phd_completed.html', redirectTo: '/phd-awarded', pathMatch: 'full' },

  // Ph.D Pursuing
  { path: 'phd-pursuing', component: PhdPursuingPageComponent },
  { path: 'phd-pursuing.html', component: PhdPursuingPageComponent },
  { path: 'phd_pursuing.html', component: PhdPursuingPageComponent },

  // Consultancy
  { path: 'consultancy', component: ConsultancyPageComponent },
  { path: 'consultancy.html', component: ConsultancyPageComponent },
  { path: 'Consultancy.html', component: ConsultancyPageComponent },

  // Downloads / Circulars
  { path: 'downloads', component: DownloadsPageComponent },
  { path: 'downloads.html', component: DownloadsPageComponent },
  { path: 'circular.html', component: DownloadsPageComponent },

  // Wildcard
  { path: '**', redirectTo: '' }
];
