import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  constructor() { }

  mockAnnounces:any= [
    {
      header :'Cenaze',
      content:'ömer oğlu osmanın anası öldü',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Düğün',
      content:'ömer ile osmanın nikahı',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Sünnet',
      content:'ömer sünnet oldu',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Açılış',
      content:'ömer gasilhane açtı',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Cenaze',
      content:'ömer oğlu osmanın anası öldü',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Düğün',
      content:'ömer ile osmanın nikahı',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Sünnet',
      content:'ömer sünnet oldu',
      date: new Date(),
      whose:'@omer'
    },{
      header :'Açılış',
      content:'ömer gasilhane açtı',
      date: new Date(),
      whose:'@omer'
    }
  ]

  get getMock(){
    return this.mockAnnounces
  }
}
