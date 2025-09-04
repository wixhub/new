import { Injectable } from '@angular/core';

interface Week {
  name: string;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class CountService {

  private data: Week[] = [
    {
      "name": "KW40",
      "value": 8940000
    },
    {
      "name": "KW41",
      "value": 5000000
    },
    {
      "name": "KW42",
      "value": 7200000
    },
      {
      "name": "KW43",
      "value": 6200000
    }
  ];


  get countData() {
    return this.data;
  }

  randomData() {
    this.data = [
      {
        "name": "KW40",
        "value": Math.random() * 1000000
      },
      {
        "name": "KW41",
        "value": Math.random() * 1000000
      },
      {
        "name": "KW42",
        "value": Math.random() * 1000000
      },
        {
        "name": "KW43",
        "value": Math.random() * 1000000
      }
    ];
  }

}
