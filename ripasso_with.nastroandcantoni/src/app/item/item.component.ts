import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../search.models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  birra!: string | null
  obsbirra !: Observable <Root>
  ris !: Root


  constructor(public http:HttpClient, private route:ActivatedRoute){
     this.route.paramMap.subscribe(this.funzione)
  }
  funzione = (params:ParamMap)=>{
    this.birra=params.get('id')
    this.obsbirra =this.http.get<Root>(` https://api.punkapi.com/v2/beers/${this.birra} `)
    this.obsbirra.subscribe((data:Root)=>{this.ris=data})

  }
}
