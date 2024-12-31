import { Component, input, signal } from '@angular/core';
import { WishItems } from '../../../../shared/models/wishItems';
import { FilterWishesPipe } from '../../pipes/filter-wishes.pipe';
@Component({
  selector: 'app-wish-list',
  imports: [FilterWishesPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  wishes = input();
  searchTerm = signal('0');
  toggleItem(wish:WishItems){
    console.log(wish.isComplete);
    wish.isComplete = !wish.isComplete;
    console.log(wish.isComplete);
  }
}
