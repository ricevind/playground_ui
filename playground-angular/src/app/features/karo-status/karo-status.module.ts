import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaroStatusComponent } from './containers/karo-status/karo-status.component';
import { KaroStatusRoutes } from './karo-status.routing';
import { EditableInputComponent } from 'app/elements/editable-input/editable-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, KaroStatusRoutes, ReactiveFormsModule],
  declarations: [KaroStatusComponent, EditableInputComponent]
})
export class KaroStatusModule {}
