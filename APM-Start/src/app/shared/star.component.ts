import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {

        this.starWidth = this.rating * 75 / 5;
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

    }

    onClick():void{

    
        this.ratingClicked.emit(this.rating+' clicked!');
    }


}