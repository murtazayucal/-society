import { Component } from '@angular/core';
import {ListboxModule} from "primeng/listbox";
import {UserService} from "../../../services/user/user.service";
import {UserModel} from "../../../models/user.model";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ListboxModule,
    FormsModule,
    Button,
    DialogModule,
    InputTextModule,
    CalendarModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(public userService:UserService) {
  }


  selectedUser!: UserModel;
  visible: boolean=false;

  ngOnInit() {
  }

  addUserPanel(){
    this.visible=!this.visible;
  }
}
