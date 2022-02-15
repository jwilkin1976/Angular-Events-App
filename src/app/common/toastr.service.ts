import { InjectionToken } from "@angular/core"

// define token used to lookup service for dependency injection
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

// define interface for service. We can expose as many or as few methods as our application requires
export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
