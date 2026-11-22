import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="card" style="margin-bottom:0;">
      <div style="font-size:13px; color:#64748b;">{{ titleKey | translate }}</div>
      <div style="font-size:26px; font-weight:700; margin:6px 0;">{{ value }}</div>
      <div style="font-size:12px; color:#475569;">{{ subtitleKey | translate: subtitleParams }}</div>
    </div>
  `
})
export class KpiCardComponent {
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) value!: string;
  @Input({ required: true }) subtitleKey!: string;
  @Input() subtitleParams: Record<string, unknown> = {};
}
