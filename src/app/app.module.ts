import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HelloWorldComponent } from './hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
//ngmodule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { LogService } from './log.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './second/app-routing.module';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingsPipePipe,
    AppSizerComponent,
    HighlightDirective,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
