import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

function fullName(pkg: string): string {
  return `@tdm/${pkg}`;
}

@Component({
  selector: 'tdm-package-welcome',
  templateUrl: './package-welcome.component.html',
  styleUrls: [ './package-welcome.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmPackageWelcomeComponent {
  @Input() name: string;
  @Input() deps: string[];
  @Input() title: string;
  @Input() description: string;
  @Input() ngVersion: string;
  @Input() version: string;
  @Input() buttonText: string;
  @Input() buttonLink: string;

  get installCmd(): string {
    const pkgs = [this.name, ...(this.deps || [])];
    return pkgs.map(fullName).join('  ');
  }

}
