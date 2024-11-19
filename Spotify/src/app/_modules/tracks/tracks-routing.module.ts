import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraskComponent } from './pages/trask/trask.component';

const routes: Routes = [
  {
    path: '',
    component: TraskComponent,
  },
  
  // TODO: se define la ruta para ver detalles de un track http://localhost:4200/tracks/:id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
