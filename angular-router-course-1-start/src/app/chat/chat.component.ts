import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit(): void {
  }

  closeChat(): void {
    this.router.navigate([{ outlets: { chat: null } }]);
  }

}
