import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './portal-layout.html',
  styleUrl: './portal-layout.scss'
})
export class PortalLayout {

}
