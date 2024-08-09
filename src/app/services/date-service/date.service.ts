import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getAllDate(){
    const date = new Date(Date.now());
    return date.toString();
  }

}
