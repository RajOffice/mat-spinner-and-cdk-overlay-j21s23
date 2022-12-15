import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatSpinner } from '@angular/material';

import {OverlayModule} from '@angular/cdk/overlay'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MatProgressSpinnerModule, 
    OverlayModule 
  ],
  declarations: [ AppComponent, HelloComponent, MatSpinner ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ MatSpinner ],
})
export class AppModule { }
