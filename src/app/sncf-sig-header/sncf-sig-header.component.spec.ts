import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SncfSigHeaderComponent } from "./sncf-sig-header.component";

describe("SncfSigHeaderComponent", () => {
  let component: SncfSigHeaderComponent;
  let fixture: ComponentFixture<SncfSigHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SncfSigHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfSigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
