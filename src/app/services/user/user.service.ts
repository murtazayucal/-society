import { Injectable } from '@angular/core';
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList : UserModel [] = [
    {
      id:1,
      name:'murtaza',
      lastname:'yucal',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:2,
      name:'cihan',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    },{
      id:4,
      name:'görkemsu',
      lastname:'bahcivan',
      birtdate:new Date('26.10.1997'),
      city:'ığdır',
      district:'merkez'
    }
  ]
  constructor() { }

  addUser(user:UserModel){

    this.userList.push(user)
  }
  deleteUser(id:number){
    this.userList = this.userList.filter(x=> x.id != id)
  }
}
