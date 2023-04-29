import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, retry } from 'rxjs';
import { Human } from '../model/Human';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class HumanService  {
  #limit: number = 150;
  responce : any;
  human:Human[] =[
  ];

  constructor(private http: HttpClient) {
  }

  getHumans(page: number) : Observable< Human[]>{

    for(let i = 0; i <5;i++){
    this.http.get(
      `https://randomuser.me/api/`)
      .subscribe( (response) => {
      this.responce = response;
      let humant : Human =
      {
        name : this.responce.results[0].name.first,
         gender: this.responce.results[0].gender,
           dob : this.responce.results[0].dob.age,
          picture: this.responce.results[0].picture.large
        };
      this.human.push( humant);
    });
  }

    return of(this.human);

}

}
