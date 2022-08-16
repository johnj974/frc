import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'facilities',
    loadChildren: () =>
      import('./facilities/facilities.module').then((m) => m.FacilitiesModule),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./classes/classes.module').then((m) => m.ClassesModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./resources/resources.module').then((m) => m.ResourcesModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'childcare',
    loadChildren: () =>
      import('./childcare/childcare.module').then((m) => m.ChildcareModule),
  },
  {
    path: 'seniors',
    loadChildren: () =>
      import('./seniors/seniors.module').then((m) => m.SeniorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
