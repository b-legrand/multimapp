import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

import { SncfSigMapContainerComponent } from "./sncf-sig-map-container.component";
import { SncfSigMapComponent } from "../sncf-sig-map/sncf-sig-map.component";

@Component({
  selector: "sncf-sig-map",
  template: "<p>Mocked Map</p>",
  standalone: true,
})
class MockSncfSigMapComponent {
  @Input()
  public mapProperties!: __esri.MapProperties;

  @Input()
  public mapViewProperties!: __esri.MapViewProperties;

  @Output()
  public mapLoaded: EventEmitter<any> = new EventEmitter<any>();
}

describe("SncfSigMapContainerComponent", () => {
  let component: SncfSigMapContainerComponent;
  let fixture: ComponentFixture<SncfSigMapContainerComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(SncfSigMapContainerComponent, {
      add: { imports: [MockSncfSigMapComponent] },
      remove: { imports: [SncfSigMapComponent] },
    });
    fixture = TestBed.createComponent(SncfSigMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
