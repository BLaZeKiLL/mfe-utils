import { Component, OnInit } from '@angular/core';
import { createElementWhenDefined } from '@codeblaze/mfe-utils-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Playground';

  ngOnInit(): void {
    createElementWhenDefined('main', 'hello-world', {
      message: 'from the playground'
    });
  }

}
