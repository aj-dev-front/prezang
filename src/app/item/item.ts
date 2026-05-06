import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import { ItemType } from '../list/list';

export type ItemActions = 
| { type: 'plus', id: ItemType["id"] }
| { type: 'remove', id: ItemType["id"]};

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Item {
  readonly item = input.required<ItemType>();

  readonly actions = output<ItemActions>();

  plus() {
    this.actions.emit({type: 'plus', id: this.item().id})
  }

  remove() {}
}
