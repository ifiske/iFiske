import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { Permit } from '../../providers/user/userTypes';
import { OrganizationProvider, Organization } from '../../providers/organization/organization';
import { serverLocation } from '../../providers/api/serverLocation';
import { AreaProvider } from '../../providers/area/area';
import { DeepLinks, DeepLinksProvider } from '../../providers/deep-links/deep-links';
import { GoogleAnalytics } from '../../providers/google-analytics/google-analytics';
import { flip } from '../../animations/flip';

@Component({
  selector: 'app-permit',
  templateUrl: 'permit.html',
  animations: [flip('showFront'), flip('showBack', false)],
})
export class PermitComponent {
  qr: string;

  @Input()
  admin: boolean = false;
  @Input()
  permit: Permit;
  @Output()
  revoke = new EventEmitter<boolean>();
  org?: Organization;
  serverLocation = serverLocation;

  show = 'first';
  constructor(
    private organizationProvider: OrganizationProvider,
    private areaProvider: AreaProvider,
    private ga: GoogleAnalytics,
    private deepLinks: DeepLinksProvider,
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.permit.currentValue) {
      this.updateQR();
      try {
        if (this.permit.ai != undefined) {
          this.org = await this.areaProvider
            .getOne(this.permit.ai)
            .then(area => this.organizationProvider.getOne(area.orgid));
        }
      } catch (e) {
        // Don't do anything
      }
    }
  }

  private updateQR() {
    this.qr = `data:image/png;base64,${this.permit.qr}`;
  }

  openProductInBrowser() {
    console.log('Opening product!', this.permit.pid);
    this.ga.trackEvent('Purchase', 'Web', '' + this.permit.pid);

    this.deepLinks.open(DeepLinks.buy, { productId: '' + this.permit.pid }, { bringSession: true });
  }

  openCatchReport() {
    this.deepLinks.open(DeepLinks.catchReport, { ID: '' + this.permit.code }, { bringSession: true });
  }

  flip() {
    this.show = this.show === 'first' ? 'second' : 'first';
  }
}
