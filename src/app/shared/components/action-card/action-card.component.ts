import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  @Input() icon = '';
  @Input() text = '';
  @Input() subText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
