import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';

import {
  Item,
  ItemActions,
} from '../item/item';

export type ItemType = {
  id: number,
  value: Record<string, string | number>
}

@Component({
  selector: 'app-list',
  imports: [Item],
  templateUrl: './list.html',
  styleUrl: './list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List {
  protected readonly items = signal<ItemType[]>([]).asReadonly();

  manageActions(event: ItemActions) {
    switch(event.type) {
      case 'plus':
      case 'remove':
    }
  }
}
