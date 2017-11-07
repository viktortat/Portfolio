import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule }         from '@angular/forms';

import {GrowlModule}           from 'primeng/primeng';
import {CalendarModule}        from 'primeng/primeng';

import { BackPanelComponent} from './backpanel/backpanel.component';
import { FooterComponent} from './footer/footer.component';
import { ModalComponent} from './modal/modal.component';
import { ErrorComponent} from './modal/error/error.component';
import { DeleteComponent} from './modal/delete/delete.component';
import { RibbonComponent} from './ribbon/ribbon.component';
import { TrimTextDirective }  from './trimtext.directive';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule,GrowlModule, CalendarModule ],
  declarations: [ BackPanelComponent,ErrorComponent,DeleteComponent, FooterComponent, ModalComponent, RibbonComponent, TrimTextDirective ],
  exports:      [ CommonModule,ErrorComponent,DeleteComponent,GrowlModule, CalendarModule, FormsModule,ReactiveFormsModule, BackPanelComponent,FooterComponent,RibbonComponent, ModalComponent, TrimTextDirective ],
  entryComponents:[ErrorComponent, DeleteComponent]
})
export class SharedModule { }