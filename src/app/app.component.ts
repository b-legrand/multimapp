import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SncfSigHeaderComponent } from './sncf-sig-header/sncf-sig-header.component';
import { SncfSigMapContainerComponent } from './sncf-sig-map-container/sncf-sig-map-container.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  standalone: true,
  imports: [SncfSigHeaderComponent, SncfSigMapContainerComponent]
})
export class AppComponent {
  public title = 'multimapp';
}
