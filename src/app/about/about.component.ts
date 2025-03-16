import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Spell } from '../../types/Spell';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  title = 'About us data';
  spells = signal<Spell[]>([]);

  async ngOnInit() {
    try {
      const fetchData = await this.fetchData();
      this.spells.set(fetchData);
      console.log(fetchData);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  private async fetchData(): Promise<any[]> {
    const response = await fetch(
      'https://potterapi-fedeperin.vercel.app/en/spells'
    );
    return response.json();
  }
}
