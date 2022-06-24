import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[app-highlight]'
})

export class HighlightDirective{
    //el: any;
    
    
    @HostListener('mouseenter') onMouseEnter(){
        this.highlight('red');
    }
    
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight('');
    }


    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';


    }

    private highlight(color: string){
        this.el.nativeElement.style.backgroundColor= color;
    }
}