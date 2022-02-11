/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'umami-components';




export declare interface UmamiRecipe extends Components.UmamiRecipe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['recipeId']
})
@Component({
  selector: 'umami-recipe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['recipeId']
})
export class UmamiRecipe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
