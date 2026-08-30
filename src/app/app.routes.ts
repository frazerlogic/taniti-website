import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Attractions } from './attractions/attractions';
import { Lodging } from './lodging/lodging';
import { Transportationto } from './transportationto/transportationto';
import { Transportationon } from './transportationon/transportationon';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'attractions', component: Attractions },
  { path: 'lodging', component: Lodging },
  { path: 'transportation-to', component: Transportationto },
  { path: 'transportation-on', component: Transportationon },
  { path: 'about', component: About },
];
