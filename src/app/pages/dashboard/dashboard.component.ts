import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { KpiCardComponent } from '../../shared/kpi-card/kpi-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslateModule, KpiCardComponent],
  template: `
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <div>
          <h1 style="font-size:24px;" i18n="Dashboard page title@@dashboardTitle">Infrastructure Overview</h1>
          <p style="color:#64748b; font-size:14px;">{{ 'DASHBOARD.SUBTITLE' | translate: { region: 'eu-central-1' } }}</p>
        </div>
        <button class="btn btn-primary" (click)="triggerDeployment()">
          {{ 'DASHBOARD.ACTIONS.DEPLOY_RELEASE' | translate }}
        </button>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-bottom:20px;">
        <app-kpi-card
          titleKey="DASHBOARD.KPI.UPTIME_TITLE"
          value="99.98%"
          subtitleKey="DASHBOARD.KPI.UPTIME_SUB"
          [subtitleParams]="{ days: 30 }">
        </app-kpi-card>
        <app-kpi-card
          titleKey="DASHBOARD.KPI.LATENCY_TITLE"
          value="42 ms"
          subtitleKey="DASHBOARD.KPI.LATENCY_SUB"
          [subtitleParams]="{ percentile: 'P95' }">
        </app-kpi-card>
        <app-kpi-card
          titleKey="DASHBOARD.KPI.NODES_TITLE"
          value="18 / 20"
          subtitleKey="DASHBOARD.KPI.NODES_SUB"
          [subtitleParams]="{ count: 2 }">
        </app-kpi-card>
      </div>

      <div class="card">
        <h2 style="font-size:16px; margin-bottom:8px;" i18n="Cluster health section heading@@clusterHealthHeading">
          Active Production Clusters
        </h2>
        <p style="font-size:13px; color:#64748b; margin-bottom:12px;">
          {{ 'DASHBOARD.CLUSTER_DESCRIPTION' | translate }}
        </p>

        <table>
          <thead>
            <tr>
              <th>{{ 'DASHBOARD.TABLE.CLUSTER' | translate }}</th>
              <th>{{ 'DASHBOARD.TABLE.REGION' | translate }}</th>
              <th>{{ 'DASHBOARD.TABLE.CPU_LOAD' | translate }}</th>
              <th>{{ 'DASHBOARD.TABLE.STATUS' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>k8s-prod-frankfurt-01</td>
              <td>eu-central-1</td>
              <td>64%</td>
              <td><span class="badge badge-ok" i18n="Sprawny@@dashboardTitle2">Sprawny</span></td>
            </tr>
            <tr>
              <td>k8s-prod-warsaw-02</td>
              <td>eu-central-2</td>
              <td>87%</td>
              <td><span class="badge badge-warn">{{ 'COMMON.STATUS.DEGRADED' | translate }}</span></td>
            </tr>
            <tr>
              <td>k8s-worker-analytics</td>
              <td>eu-west-1</td>
              <td>31%</td>
              <td><span class="badge badge-ok">{{ 'COMMON.STATUS.HEALTHY' | translate }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      @if (deployNotice) {
        <div class="card" style="border-left: 4px solid #2563eb; background:#eff6ff;">
          {{ 'DASHBOARD.DEPLOY_NOTICE' | translate: { version: 'v2.14.0' } }}
        </div>
      }
    </div>
  `
})
export class DashboardComponent {
  deployNotice = false;

  triggerDeployment() {
    this.deployNotice = true;
  }
}
