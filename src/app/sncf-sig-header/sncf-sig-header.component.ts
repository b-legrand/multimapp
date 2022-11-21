import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "sncf-sig-header",
  styleUrls: ["./sncf-sig-header.component.css"],
  templateUrl: "./sncf-sig-header.component.html",
  standalone: true,
  imports: [CommonModule, NgbModule]
})
export class SncfSigHeaderComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  public ngOnInit() { }

}
