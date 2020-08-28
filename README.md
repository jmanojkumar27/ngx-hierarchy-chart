# ngx-hierarchy-chart

The `ngx-hierarchy-chart` creates hierarchical chart.

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Inputs](#inputs)

## Installation

You can install the packages using following command.

```sh
$ npm install d3
$ npm install ngx-hierarchy-chart
```

## Usage

|Property|Type|Default|Description
|---|---|---|---|
|name|`string`|`xxx`| Name of the node
|children|`object{}`|`xxx`| children of the nodes
|height|`number`| `Default -` `700` |Height of the chart
|width|`number`| `Default - ``500` |Width of the chart
|data|`Node[]`| |The array of child nodes


### `app.module.ts`
```js
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxHierarchyChartModule } from 'ngx-hierarchy-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxHierarchyChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`
```html
<ngx-hierarchy-chart [chartdata]="nodes"></ngx-hierarchy-chart>
```
```css
.node text {
    font: 12px sans-serif;
}

.node--internal text {
    text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
    fill: none;
    stroke: #9E9E9E;
    stroke-width: 2px;
}

.node circle {
    fill: #1784a2;
    // stroke: #2224288a;
    stroke-width: 2px;
}
```
### `app.component.ts`
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nodes: any = {data:{
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
height:600};
}
```
## Inputs

|Name|Type|Description
|---|---|---|
|`chartdata`|`Node` object|The `Node` object that contains node info mentioned above

# HierarchyChart

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Code scaffolding

Run `ng generate component component-name --project ngx-hierarchy-chart` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-hierarchy-chart`.
> Note: Don't forget to add `--project ngx-hierarchy-chart` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-hierarchy-chart` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-hierarchy-chart`, go to the dist folder `cd dist/ngx-hierarchy-chart` and run `npm publish`.

## Running unit tests

Run `ng test ngx-hierarchy-chart` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
