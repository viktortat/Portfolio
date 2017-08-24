import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls:  [
      './filter-item.component.less'
    ]
})

export class FilterItemComponent {

    @Input() name:string='';

    @Output() onFilterAction=new EventEmitter<string>(); 

    constructor() {
        
    }

    ngAfterViewInit(){
        
    }

    filterClick(type:string){
        this.onFilterAction.emit(type);
    }

}