import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public title = 'Exam Tracking';
  public profText = 'Logged in as Prof.Exam';

  constructor() {}

  ngOnInit() {}
}
