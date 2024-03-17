import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private authService: AuthService) {

  }

  collapsed: boolean = true;

  collapseSidebar(): void {
    this.collapsed = !this.collapsed;
    console.log(this.collapsed);
  }

  logout(): void {
    this.authService.logout();
  }
}
