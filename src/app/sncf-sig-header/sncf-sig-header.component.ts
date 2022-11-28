import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "sncf-sig-header",
  styleUrls: ["./sncf-sig-header.component.css"],
  templateUrl: "./sncf-sig-header.component.html",
  standalone: true,
  imports: [CommonModule]
})
export class SncfSigHeaderComponent {

  @Input() public title!: string;

  constructor() { }

}
