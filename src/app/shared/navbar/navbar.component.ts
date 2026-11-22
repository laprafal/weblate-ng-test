import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <header style="background:#0f172a; color:#fff; padding: 14px 24px;">
      <div style="max-width:1120px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px;">
        <div style="display:flex; align-items:center; gap:24px;">
          <strong style="font-size:18px; letter-spacing:-0.3px;">CloudPulse Ops</strong>
          <nav style="display:flex; gap:16px;">
            <a routerLink="/dashboard" routerLinkActive="active" style="color:#cbd5e1; text-decoration:none; font-size:14px;">
              {{ 'NAV.DASHBOARD' | translate }}
            </a>
            <a routerLink="/incidents" routerLinkActive="active" style="color:#cbd5e1; text-decoration:none; font-size:14px;">
              {{ 'NAV.INCIDENTS' | translate }}
            </a>
            <a routerLink="/billing" routerLinkActive="active" style="color:#cbd5e1; text-decoration:none; font-size:14px;">
              {{ 'NAV.BILLING' | translate }}
            </a>
            <a routerLink="/settings" routerLinkActive="active" style="color:#cbd5e1; text-decoration:none; font-size:14px;">
              {{ 'NAV.SETTINGS' | translate }}
            </a>
          </nav>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:12px; color:#94a3b8;" i18n="Language selector label@@langLabel">Language:</span>
          <button class="btn" style="padding:4px 10px; font-size:12px;" (click)="switchLang('en')">EN</button>
          <button class="btn" style="padding:4px 10px; font-size:12px;" (click)="switchLang('pl')">PL</button>
          <button class="btn" style="padding:4px 10px; font-size:12px;" (click)="switchLang('de')">DE</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    a.active { color: #ffffff !important; font-weight: 600; border-bottom: 2px solid #38bdf8; padding-bottom: 4px; }
  `]
})
export class NavbarComponent {
  private translate = inject(TranslateService);

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
