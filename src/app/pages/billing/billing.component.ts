import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container">
      <h1 style="font-size:24px; margin-bottom:6px;" i18n="Billing page title@@billingTitle">
        Subscription & Resource Quotas
      </h1>
      <p style="color:#64748b; font-size:14px; margin-bottom:20px;">
        {{ 'BILLING.DESCRIPTION' | translate }}
      </p>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
        <div class="card">
          <h2 style="font-size:18px;">{{ 'BILLING.PLANS.STARTER.NAME' | translate }}</h2>
          <p style="font-size:24px; font-weight:700; margin:10px 0;">$49 <span style="font-size:13px; font-weight:400;">{{ 'BILLING.PER_MONTH' | translate }}</span></p>
          <p style="font-size:13px; color:#475569; margin-bottom:16px;">{{ 'BILLING.PLANS.STARTER.DETAILS' | translate }}</p>
          <button class="btn">{{ 'BILLING.ACTIONS.SELECT_PLAN' | translate }}</button>
        </div>

        <div class="card" style="border: 2px solid #2563eb;">
          <span class="badge badge-ok" style="margin-bottom:8px;">{{ 'BILLING.RECOMMENDED' | translate }}</span>
          <h2 style="font-size:18px;">{{ 'BILLING.PLANS.ENTERPRISE.NAME' | translate }}</h2>
          <p style="font-size:24px; font-weight:700; margin:10px 0;">$299 <span style="font-size:13px; font-weight:400;">{{ 'BILLING.PER_MONTH' | translate }}</span></p>
          <p style="font-size:13px; color:#475569; margin-bottom:16px;">{{ 'BILLING.PLANS.ENTERPRISE.DETAILS' | translate }}</p>
          <button class="btn btn-primary">{{ 'BILLING.ACTIONS.UPGRADE_NOW' | translate }}</button>
        </div>
      </div>

      <div class="card" style="margin-top:16px;">
        <h3 style="font-size:16px; margin-bottom:8px;">{{ 'BILLING.INVOICES.TITLE' | translate }}</h3>
        <p style="font-size:13px; color:#64748b;">{{ 'BILLING.INVOICES.VAT_NOTE' | translate }}</p>
      </div>
    </div>
  `
})
export class BillingComponent {}
