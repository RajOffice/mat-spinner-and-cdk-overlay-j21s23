import { Component, OnInit } from '@angular/core';
import { UiService } from './ui.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private ui : UiService){

    // this.ui.showSpinner(); 

    this.ui.spin$.next(true);
  }

  ngOnInit(){
    // setTimeout(
    //  () => this.ui.stopSpinner(), 20000
    // )
    setTimeout(
     () => this.ui.spin$.next(false), 2000
    )

    setTimeout(
     () => this.ui.spin$.next(false), 3000
    )

    setTimeout(
     () => this.ui.spin$.next(true), 4000
    )
    setTimeout(
     () => this.ui.spin$.next(false), 5000
    )
  }

}
