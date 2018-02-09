import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "sncf-sig-header",
  styleUrls: ["./sncf-sig-header.component.css"],
  templateUrl: "./sncf-sig-header.component.html"
})
export class SncfSigHeaderComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  public ngOnInit() { }

}
