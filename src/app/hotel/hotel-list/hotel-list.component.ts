import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel.model';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
   dataHotel : Hotel[]=[];
  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotel().subscribe(data =>{
      this.dataHotel= data;
    });
  }
  editHotel(hotel:Hotel){
    this.hotelService.hotel=Object.assign({},hotel);
  }
  deleteHotel(id:string){
    this.hotelService.deleteHotel(id).subscribe(data =>{
      alert("Data dalete successfully");
    });
  }
}

