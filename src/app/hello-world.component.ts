import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template:`<h1>
    Hello World<br>
    <h2> {{ title }} </h2>
    `,
    styles: [`
    h1{
        color:red;
    }
    h2{
        color:black;
    }
    `]
})



export class HelloWorldComponent{
    title='Hello World title'
}