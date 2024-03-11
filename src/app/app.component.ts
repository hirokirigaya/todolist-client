import { Component, OnInit } from '@angular/core';
import { constants } from 'src/interfaces/contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private defaultTheme = window.matchMedia('(prefers-colors-scheme: dark)').matches;
  private routerOutlet = document.getElementById('router-outlet');
  theme = localStorage.getItem(constants.THEME_KEY);

   ngOnInit(): void {
    if (!this.theme) {
      localStorage.setItem(
        constants.THEME_KEY,
        this.defaultTheme ? 'dark' : 'light'
      );
      this.theme = localStorage.getItem(constants.THEME_KEY);
    }
  }

  toggleTheme(): void {
    localStorage.setItem(
      constants.THEME_KEY,
      this.theme === 'dark' ? 'light' : 'dark'
    );
    this.theme = localStorage.getItem(constants.THEME_KEY);
    if (this.routerOutlet?.attributes['data-theme' as any]) {
      this.routerOutlet.setAttribute('data-theme', (this.theme || 'light') as any)
    }
  }
}
