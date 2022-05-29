import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() thumbnailUrl = '';
  @Input() title = '';
  @Input() subTitle = '';
  @Input() info = '';
  @Input() paddingBottom = '0px'

  thumbnail = '';

  constructor() { }

  ngOnInit(): void {
    this.thumbnail = `url(${this.thumbnailUrl})`
  }

}
