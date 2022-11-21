import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularSplitModule } from "angular-split";
import { NO_ERRORS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

import { SncfSigMapContainerComponent } from "./sncf-sig-map-container.component";

@Component({
  selector: 'sncf-sig-map',
  template: '<p>Mocked Map</p>'
})
class MockSncfSigMapComponent {
  @Input()
  public mapProperties: __esri.MapProperties;

  @Input()
  public mapViewProperties: __esri.MapViewProperties;

  @Output()
  public onMapLoaded: EventEmitter<any> = new EventEmitter<any>();
}

describe("SncfSigMapContainerComponent", () => {
  let component: SncfSigMapContainerComponent;
  let fixture: ComponentFixture<SncfSigMapContainerComponent>;

  beforeEach(
    async () => {
      await TestBed.configureTestingModule({
        imports: [AngularSplitModule],
        declarations: [SncfSigMapContainerComponent, MockSncfSigMapComponent],
        providers: [],
      }).compileComponents();
    }
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfSigMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
