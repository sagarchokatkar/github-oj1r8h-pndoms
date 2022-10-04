import { Component } from '@angular/core';

import { HelloService } from '../hello.service';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `
    <app-hello-world [name]="name"></app-hello-world>
  `,
})
export class HelloWorldContainer extends DashboardCardContainer {
  name;

  constructor(private helloWorldService: HelloService) {
    super();
    this.name = helloWorldService.names[0];
  }
}
