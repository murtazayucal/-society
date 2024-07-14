import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {of} from "rxjs";
import {AnnouncesComponent} from "../../announce/announces/announces.component";
import {AnnounceService} from "../../../services/announce/announce.service";
import {CarouselModule} from "primeng/carousel";
import {Button} from "primeng/button";
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    CarouselModule,
    Button,
    TagModule,
    DialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible: boolean = false;
  s:any = '';
  responsiveOptions: any[] | undefined;
  constructor(public announceService:AnnounceService) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.s = this.announceService.mockAnnounces[0];

  }

  getSeverity(status: any):any {
    switch (status) {
      case 'Cenaze':
        return 'danger';
      case 'Düğün':
        return 'warning';
      case 'Sünnet':
        return 'success';
    }
    return 'success'
  }
  showDialog() {
    this.visible = true;
  }


  selectedUser(e :any){
    this.s = e;
    this.visible = true;
  }
}
