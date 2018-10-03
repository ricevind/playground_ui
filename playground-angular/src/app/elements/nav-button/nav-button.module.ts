import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [NavButtonComponent],
  exports: [NavButtonComponent]
})
export class NavButtonModule {}
