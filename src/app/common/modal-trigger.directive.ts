import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // We need to alias modal-trigger as hypens are not allowed within property names
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(JQ_TOKEN) private $ : any){
      this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    })
  }

}
