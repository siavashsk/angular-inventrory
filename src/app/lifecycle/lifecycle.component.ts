import {
  AfterViewInit,
  Component,
  computed,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
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

  tasks = signal([]);
  count = computed(() => this.tasks().length);
  doneCount = computed(() => this.tasks().filter((it: any) => it?.done).length);

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
