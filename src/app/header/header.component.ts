import { Component } from '@angular/core';
import { PoMenuModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [PoMenuModule, BrowserAnimationsModule, PoModule, MatIconModule, MatGridListModule]
})
export class HeaderComponent {

  menuTitle: string = 'TOTVS'
  menuImage: string = 'https://i.ibb.co/RNgJy7b/totvs-teste.jpg'

  onClick() {
    alert('Po Button!');
  }

}
