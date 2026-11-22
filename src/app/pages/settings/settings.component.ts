import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  template: `
    <div class="container">
      <h1 style="font-size:24px; margin-bottom:6px;" i18n="Workspace settings title@@settingsTitle">
        Workspace & Localization Settings
      </h1>
      <p style="color:#64748b; font-size:14px; margin-bottom:20px;">
        {{ 'SETTINGS.SUBTITLE' | translate }}
      </p>

      <div class="card" style="max-width:640px;">
        <label>
          {{ 'SETTINGS.FORM.ORG_NAME' | translate }}
          <input type="text" [(ngModel)]="orgName" />
        </label>

        <label>
          {{ 'SETTINGS.FORM.ALERT_EMAIL' | translate }}
          <input type="email" [(ngModel)]="alertEmail" />
        </label>

        <label>
          {{ 'SETTINGS.FORM.RETENTION_POLICY' | translate }}
          <select [(ngModel)]="retention">
            <option value="30">{{ 'SETTINGS.FORM.RETENTION_30' | translate }}</option>
            <option value="90">{{ 'SETTINGS.FORM.RETENTION_90' | translate }}</option>
            <option value="365">{{ 'SETTINGS.FORM.RETENTION_365' | translate }}</option>
          </select>
        </label>

        <label>
          {{ 'SETTINGS.FORM.MAINTENANCE_NOTE' | translate }}
          <textarea rows="3" [(ngModel)]="maintenanceNote" [placeholder]="'SETTINGS.FORM.MAINTENANCE_PLACEHOLDER' | translate"></textarea>
        </label>

        <div style="display:flex; gap:10px; align-items:center; margin-top:16px;">
          <button class="btn btn-primary" (click)="save()">{{ 'COMMON.ACTIONS.SAVE' | translate }}</button>
          <button class="btn" (click)="reset()">{{ 'COMMON.ACTIONS.CANCEL' | translate }}</button>
          @if (saved) {
            <span style="font-size:13px; color:#166534; font-weight:600;">
              {{ 'SETTINGS.MESSAGES.SAVED_OK' | translate }}
            </span>
          }
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent {
  orgName = 'Acme Cloud Systems';
  alertEmail = 'sre-oncall@example.com';
  retention = '90';
  maintenanceNote = '';
  saved = false;

  save() {
    this.saved = true;
  }

  reset() {
    this.saved = false;
  }
}
