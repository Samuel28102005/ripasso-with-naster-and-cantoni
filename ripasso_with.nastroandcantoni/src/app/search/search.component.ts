import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../search.models';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
birra!: string
obsbirra !: Observable <Root>
ris !: Root



constructor(public http:HttpClient){

}



cerca(query:HTMLInputElement){
  this.birra = query.value
  this.obsbirra=this.http.get<Root>(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
  this.obsbirra.subscribe((data:Root)=>{this.ris=data})
}


}
