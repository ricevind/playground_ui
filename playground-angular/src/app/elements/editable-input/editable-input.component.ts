import {
  Component,
  HostBinding,
  ElementRef,
  HostListener,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pg-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableInputComponent),
      multi: true
    }
  ]
})
export class EditableInputComponent implements ControlValueAccessor {
  @HostBinding('attr.contenteditable')
  contentEditable = true;

  @HostBinding('textContent')
  textContent = 'asd';

  @HostListener('input', ['$event'])
  onInputEvent($event: any) {
    this.onChange($event.target.textContent);
  }

  @HostListener('focus')
  onTouchEvent() {
    console.log('touch')
    this.onTouch();
  }


  @HostListener('compositionstart', ['$event'])
  @HostListener('compositionupdate', ['$event'])
  @HostListener('compositionend', ['$event'])
  on(e: any) {
    console.log(e)
  }
  private onChange: Function = () => null;
  private onTouch: Function = () => null;

  constructor() {}

  writeValue(obj: any): void {
    this.textContent = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
