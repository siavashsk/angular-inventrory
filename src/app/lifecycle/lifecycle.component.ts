import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  imports: [FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  showComponent = true;
  dynamicTitle = 'Hello Lifecycle!';
  @Input() title!: string;

  constructor() {
    console.log('Constructor: Component instance created.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input property changed:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized.');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component destroyed.');
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
