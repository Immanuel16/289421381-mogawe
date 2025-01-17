import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussinesRoutingModule } from './bussines-routing.module';
import { SharedModule } from '@gaxon/modules';
import { CardsModule } from '@gaxon/components';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { ContributorsComponent } from './contributors/contributors.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { DataComponent } from './data/data.component';
import { ReportComponent } from './report/report.component';
import { ItemsComponent } from './items/items.component';
import { PaymentSetupComponent } from './payment-setup/payment-setup.component';
import { TagInputModule } from 'ngx-chips';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatSliderModule } from '@angular/material/slider';
import { GaugeChartModule } from 'angular-gauge-chart';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgbdSortableHeader } from '@app/sortable.directive';
import { AppConstant } from '../constant/AppConstant';

@NgModule({
  declarations: [
    ContributorsComponent,
    WorkplaceComponent,
    DataComponent,
    ReportComponent,
    ItemsComponent,
    PaymentSetupComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    BussinesRoutingModule,
    SharedModule,
    CardsModule,
    AmChartsModule,
    NgxEchartsModule,
    ChartistModule,
    TagInputModule,
    MatSliderModule,
    GaugeChartModule,
    NgxSliderModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstant.GMAP_API_KEY
    }),
    NgxDaterangepickerMd.forRoot()
  ]
})
export class BussinesModule { }
