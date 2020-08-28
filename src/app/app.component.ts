import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hierarchy-chart';
  data = {data:{
    "name": "A1",
    "children": [
      {
        "name": "B1",
        "children": [
          {
            "name": "C1"
          },
          {
            "name": "C2"
          },
          {
            "name": "C3"
          }, 
          {
            "name": "C4"
          },
          {
            "name": "C5"
          },
          {
            "name": "C6"
          }
        ]
      },
      {
        "name": "B2",
        "children": [
          {
            "name": "C1"
          },
          {
            "name": "C2"
          },
          {
            "name": "C3",
            "children":[
              {
                "name": "D1"
              },
              {
                "name": "D2"
              }  
            ]
          }
        ]
      }
    ]
  },
width:800,
height:600,
chartId:'body'}

data1 = {data:{children:[{name: "'130C11508R'",children:[{name:"manoj"}]}, {name: "'210107477R'"}],name: "'117202495R'"},
width:700,
height:500,
chartId:'body'}
}
