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

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SncfSigHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = 'Welcome to app!';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

});
