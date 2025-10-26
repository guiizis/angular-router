import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    standalone: false
})
export class ChatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeChat() {
    this.router.navigate([{ outlets: { chat: null }}]);
  }

}
