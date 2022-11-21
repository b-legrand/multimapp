import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SncfSigMapComponent } from "./sncf-sig-map.component";

describe("SncfSigMapComponent", () => {
  let component: SncfSigMapComponent;
  let fixture: ComponentFixture<SncfSigMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SncfSigMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfSigMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create and load esri map", () => {
    expect(component).toBeTruthy();
    component.mapProperties = {
      basemap: "street"
    };
    component.mapViewProperties = {

    };
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
