import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface IncidentItem {
  id: string;
  service: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  summaryKey: string;
  resolved: boolean;
}

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  template: `
    <div class="container">
      <h1 style="font-size:24px; margin-bottom:6px;" i18n="Incidents page heading@@incidentsHeading">
        Incident & Alert Center
      </h1>
      <p style="color:#64748b; font-size:14px; margin-bottom:20px;">
        {{ 'INCIDENTS.INTRO' | translate }}
      </p>

      <div class="card">
        <h2 style="font-size:16px; margin-bottom:12px;">{{ 'INCIDENTS.FILTER.TITLE' | translate }}</h2>
        <div style="display:grid; grid-template-columns: 1fr 220px; gap:12px;">
          <input
            type="text"
            [(ngModel)]="searchTerm"
            [placeholder]="'INCIDENTS.FILTER.SEARCH_PLACEHOLDER' | translate" />
          <select [(ngModel)]="selectedSeverity">
            <option value="ALL">{{ 'INCIDENTS.FILTER.ALL_SEVERITIES' | translate }}</option>
            <option value="HIGH">{{ 'INCIDENTS.SEVERITY.HIGH' | translate }}</option>
            <option value="MEDIUM">{{ 'INCIDENTS.SEVERITY.MEDIUM' | translate }}</option>
            <option value="LOW">{{ 'INCIDENTS.SEVERITY.LOW' | translate }}</option>
          </select>
        </div>
      </div>

      @for (item of filteredIncidents; track item.id) {
        <div class="card" style="display:flex; justify-content:space-between; align-items:center; gap:16px;">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <strong>{{ item.id }}</strong>
              <span class="badge" [class.badge-err]="item.severity === 'HIGH'" [class.badge-warn]="item.severity !== 'HIGH'">
                {{ 'INCIDENTS.SEVERITY.' + item.severity | translate }}
              </span>
              <span style="font-size:13px; color:#64748b;">({{ item.service }})</span>
            </div>
            <p style="font-size:14px;">{{ item.summaryKey | translate }}</p>
          </div>

          <button class="btn" (click)="toggleResolve(item)">
            {{ (item.resolved ? 'INCIDENTS.ACTIONS.REOPEN' : 'INCIDENTS.ACTIONS.ACKNOWLEDGE') | translate }}
          </button>
        </div>
      }
    </div>
  `
})
export class IncidentsComponent {
  searchTerm = '';
  selectedSeverity = 'ALL';

  incidents: IncidentItem[] = [
    {
      id: 'INC-4091',
      service: 'auth-gateway',
      severity: 'HIGH',
      summaryKey: 'INCIDENTS.ITEMS.AUTH_TIMEOUT',
      resolved: false,
    },
    {
      id: 'INC-4088',
      service: 'billing-worker',
      severity: 'MEDIUM',
      summaryKey: 'INCIDENTS.ITEMS.WEBHOOK_RETRY',
      resolved: false,
    },
    {
      id: 'INC-4075',
      service: 'cdn-edge-pl',
      severity: 'LOW',
      summaryKey: 'INCIDENTS.ITEMS.CACHE_MISS_SPIKE',
      resolved: true,
    },
  ];

  get filteredIncidents(): IncidentItem[] {
    return this.incidents.filter((i) => {
      const matchesSeverity = this.selectedSeverity === 'ALL' || i.severity === this.selectedSeverity;
      const matchesText =
        !this.searchTerm ||
        i.service.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        i.id.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesSeverity && matchesText;
    });
  }

  toggleResolve(item: IncidentItem) {
    item.resolved = !item.resolved;
  }
}
