import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';



@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SliderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SliderComponent,
  ]
})
export class ComponentsModule { }
