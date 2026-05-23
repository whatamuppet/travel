import { Routes } from '@angular/router';

import { Home } from '../pages/home/home';
import { TurksAndCaicos } from '../pages/turks-and-caicos/turks-and-caicos';
import { NewYork } from '../pages/new-york/new-york';
import { Italy } from '../pages/italy/italy';
import { Switzerland } from '../pages/switzerland/switzerland';
import { Washingtondc } from '../pages/washingtondc/washingtondc';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'turks-and-caicos', component: TurksAndCaicos },
    { path: 'new-york', component: NewYork },
    { path: 'washingtondc', component: Washingtondc },
    { path: 'italy', component: Italy },
    { path: 'switzerland', component: Switzerland },
    { path: '**', redirectTo: '' }
];