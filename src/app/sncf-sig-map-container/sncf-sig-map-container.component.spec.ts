import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SncfSigMapContainerComponent } from "./sncf-sig-map-container.component";

describe("SncfSigMapContainerComponent", () => {
  let component: SncfSigMapContainerComponent;
  let fixture: ComponentFixture<SncfSigMapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncfSigMapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfSigMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
