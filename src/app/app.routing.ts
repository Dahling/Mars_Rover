import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes = [
  {
    path: 'rover-form',
    component: RoverFormComponent
  },
  {
    path: 'photos-list',
    component: PhotosListComponent
  },
  {
    path: 'private',
    component: PrivateComponent
  },
  {
    path: 'public',
    component: PublicComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
