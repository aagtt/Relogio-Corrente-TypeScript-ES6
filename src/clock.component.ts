  import { Component } from '@angular/core';
  import { Clock } from './clock.model';
  import { ClockService } from './clock.service';

  @Component({
    selector: 'clock',
    template: '<h3 style="text-align:center; border:3px solid gray"><h2>{{clock}}</h2></h3>'
  })

  export class ClockComponent {
    clock: Clock;
    constructor(clockService: ClockService) {
      clockService.GenerateTimeNow(1000, clock => this.clock = clock);
    }
  }
