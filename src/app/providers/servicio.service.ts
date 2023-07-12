import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
   private URL: string = 'https://internationalfootball-af63b-default-rtdb.firebaseio.com/collection.json';
    getResponse() {
          return this.http.get(this.URL);
      }
}
