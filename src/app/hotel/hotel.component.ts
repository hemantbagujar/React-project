import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.model';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(public hotelService:HotelService) { }

  ngOnInit(): void {}
    onSubmit()
    {
      console.log(this.hotelService.hotel);
      if(this.hotelService.hotel.id==null || this.hotelService.hotel.id ==""){
        this.hotelService.createHotel(this.hotelService.hotel).subscribe(data=>{});
      }
      else{this.hotelService.updatehotel(this.hotelService.hotel).subscribe(data=>{});
    
    }
  }

}
