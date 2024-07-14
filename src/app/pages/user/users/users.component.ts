import { Component } from '@angular/core';
import {ListboxModule} from "primeng/listbox";
import {UserService} from "../../../services/user/user.service";
import {UserModel} from "../../../models/user.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ListboxModule,
    FormsModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(public userService:UserService) {
  }


  selectedUser!: UserModel;

  ngOnInit() {
  }
}
