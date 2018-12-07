import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SortService {
    private selectedOption:string;
    set_sort_option(selectedOption){

        this.selectedOption=selectedOption;
    }
    get_sort_option():string{
        console.log(this.selectedOption);
        return this.selectedOption;
    }
}