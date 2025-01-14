import { CommonModule } from '@angular/common';
import { Injector,NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { MENU_COMPONENTS } from './app.menu.config';


@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule
  ],
  declarations: [
    ...MENU_COMPONENTS,
  ],
  exports: [
    CommonModule,
    ...MENU_COMPONENTS,
    OChartModule
  ],
  entryComponents: [...MENU_COMPONENTS],
})
export class SharedModule { }

