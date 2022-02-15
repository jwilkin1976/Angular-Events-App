import { Directive, ElementRef, Inject, OnInit } from "@angular/core";
import { JQ_TOKEN } from ".";

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(ref: ElementRef,
    @Inject(JQ_TOKEN) private $ : any){
      this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    })
  }

}
