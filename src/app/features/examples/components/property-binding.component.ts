import { Component } from '@angular/core';

@Component({
  selector: 'app-app-property-binding',
  template: `
    <h1>Property Binding vs String interpolation</h1>

    <!-- String interpolation-->

    <!-- Clean and shorter-->
    <p>{{ title }}</p>
    <p [textContent]="title"></p>
    <!-- More noise and long-->

    <!-- Property Binding-->
    <!-- More noise and long-->

    <img src="{{ imageUrl }}" alt="" />

    <!-- Clean and shorter-->

    <img [src]="imageUrl" alt="" />
  `,
})
export class PropertyBindingComponent {
  title = 'Listado de productos';
  imageUrl = 'https://source.unsplash.com/random/200x200';
}
