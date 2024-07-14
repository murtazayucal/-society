import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AvatarModule} from "primeng/avatar";
import {ToolbarModule} from "primeng/toolbar";
import {Ripple} from "primeng/ripple";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SidebarModule, AvatarModule, ToolbarModule, Ripple, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dernek';
  sidebarVisible1:boolean= false;
  open(){
    this.sidebarVisible1=!this.sidebarVisible1
  }



}
