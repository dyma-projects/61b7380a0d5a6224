import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public counter = 0;
  @Output() private changeCounter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public incr(): void {
    this.changeCounter.emit(1);
  }

  public decr(): void {
    this.changeCounter.emit(-1);
  }
}
