import { Component, Input, AfterViewInit } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements AfterViewInit {
  @Input() name: string;

  constructor(private ui: UiService){}

  ngAfterViewInit(){

  //   setTimeout(
  //    () => this.ui.spin$.next(false), 1000
  //   )

  //   setTimeout( 
  //    () => this.ui.spin$.next(false), 3000
  //   )
  }
}
