import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SncfSigMapContainerComponent } from './sncf-sig-map-container/sncf-sig-map-container.component';
import { SncfSigHeaderComponent } from './sncf-sig-header/sncf-sig-header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SncfSigHeaderComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
