import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITag} from "../../../Core/Models/tag";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Output() orderByFieldChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() orderByFieldAscendingChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectedTagsChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  @Input() orderByField:string;
  @Input() orderByFieldAscending: boolean = true;
  @Input() selectedTags:number[];

  Tags:ITag[] ;

  constructor() { }

  ngOnInit(): void {
    this.Tags.push(new class implements ITag {
      tagId: number;
      tagName: string;
    })
  }

  onTagsChange($event: boolean) {

  }

  onTagsReset() {

  }
}
