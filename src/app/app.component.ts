import { Component,OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
  intervalSub;
  ngOnInit() {
    this.intervalSub= setInterval(() =>{
      console.log("Hello from ngInit");
    }, 1000);

    this.setCurrentClasses();
    //this.setprevClasses();

    this.setCurrentStyle();

    // dependency Injector
    this.logService.logMessage(" Message from constructor")

    //Dependency injector for inbuilt angular modules
    this.renderer.setStyle(this.host.nativeElement,'color','blue')


    // HttpClient
    this.dataService.getData().subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnDestroy(){
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }


  //template Statements
  showText=false;
  toggleText(event):void{
    this.showText = !this.showText;
    console.log(event);
  }
  //pipe
  todayDate=new Date();


  // property binding
  itemImageUrl='../assets/tree.jpg'

  //disabled button
  isDisabled=false

  onClickChange(event):void{
    this.isDisabled = !this.isDisabled
  }
  // classbinding
  onSale=true

  //event Binding
  click:number=0
  onSave(){
    console.log('Hello console')
    this.click=this.click+1
    console.log("clicked"+this.click)
  }

  // two way binding
  fontSizepx=16;

  // template variable
  callPhone(phone:string){
    console.log("phone"+phone)
  }

  // ngClass
  isSpecial=true;
  currentClasses={}
  // previousClasses={}

  setCurrentClasses(){
    this.currentClasses={
      saveable: true,
      modified: false,
      special: true
    }
  }

  // setprevClasses(){
  //   this.previousClasses={
  //     saveable: false,
  //     modified: true,
  //     special: true
  //   }
  // }

  // ngstyle
  currentStyle={};

  setCurrentStyle() {
    this.currentStyle={
     'font-style':'italic',
      'font-weight':'bold',
      'color':'red'
    }
  }
// ngModel
  name="abc"


  //ngIf
  isActive=true;
  isActive2=!this.isActive;

  // ngFor

  items=[
    {name:'Bob',section:'A'},
    {name:'John',section:'B'},
    {name:'Monika',section:'A'},
  ]

  // ngSwitch
  item={ name: 'Bob'};
  
// dependency Injector
constructor(private logService:LogService,
  private renderer:Renderer2,
  private host:ElementRef,
 //for httpclient
  private dataService:DataService)
  {

}
// template driven form
  species=['fish','cat','dog'];
  model=new Pet(1,'Goldie',this.species[0])

  submited=false;

  onSubmit(){
    this.submited=true;
  }

  // Reactive Forms
  name1= new FormControl('');

  updateName(){
    this.name1.setValue('ABC')
  }

  // Reactive Form Group
  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl('')
  });


  onSubmitForm(){
    console.log(this.profileForm.value)
  }
// formValidation
  nameInput='';

  // form Validation for reactive form

  validateForm= new FormGroup({
    name5:new FormControl(this.nameInput,[Validators.required,
    Validators.minLength(4)
    ])
  });

  get Name(){
    return this.validateForm.get('name5')
  }

  
}
 
