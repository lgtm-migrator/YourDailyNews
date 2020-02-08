import { Component, OnInit } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin);
  }

  ngOnInit() {
  }

}