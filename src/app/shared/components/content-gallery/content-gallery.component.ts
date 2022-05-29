import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-gallery',
  templateUrl: './content-gallery.component.html',
  styleUrls: ['./content-gallery.component.scss']
})
export class ContentGalleryComponent implements OnInit {
  @Input() type: 'video' | 'document' | 'people' = 'video';
  @Input() contentList: any[] = [];

  title = '';
  actionText = '';
  actionSubText = '';
  actionIcon = '';

  constructor() { }

  ngOnInit(): void {
    switch (this.type) {
      case 'video':
        this.title = 'Videos';
        this.actionText = 'Upload';
        this.actionSubText = 'Your Own Video';
        this.actionIcon = 'pi-arrow-up';
        break;
      case 'document':
        this.title = 'Documents';
        this.actionText = 'Show';
        this.actionSubText = 'Your Work';
        this.actionIcon = 'pi-file';
        break;
      case 'people':
        this.title = 'People';
        this.actionText = 'Upload';
        this.actionSubText = 'Your Document';
        this.actionIcon = 'pi-plus';
        break;
      default:
        this.title = 'Videos'
        this.actionText = 'Upload';
        this.actionSubText = 'Your Own Video';
        break;
    }
  }

  trackContentByFn(index: number, item: any) {
    return index;
  }

}
