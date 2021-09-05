import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {path:'hotel',component:HotelComponent},
  {path:'hotelList',component:HotelListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
