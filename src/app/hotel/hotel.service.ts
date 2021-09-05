import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';







const headersOption={
  Headers: new HttpHeaders({'content_Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  mockUrl:string='http://localhost:3000/Hotel';
  hotel:Hotel={
    id:"",
    hotelName:"",
    hotelPlace:"",
    address:"",
    rate:"",

  }

  constructor(private http :HttpClient) { }
  public getAllHotel(){
    return this. http.get<Hotel[]>(this.mockUrl);
  }
  createHotel(hotel:Hotel){
    return this.http.post<Hotel>(this.mockUrl,this.hotel);
  }
  deleteHotel(id:string){
    return this.http.delete<Hotel>(this.mockUrl+"/"+id);
  }
  updatehotel(hotel:Hotel){

    return this.http.put<Hotel>(this.mockUrl+"/"+hotel.id,hotel);
  }
}


