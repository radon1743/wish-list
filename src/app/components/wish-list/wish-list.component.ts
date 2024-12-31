import { Component, input, signal } from '@angular/core';
import { WishItems } from '../../../../shared/models/wishItems';
import { FilterWishesPipe } from '../../pipes/filter-wishes.pipe';
import { HighlightFulfilledWishesDirective } from '../../highlight-fulfilled-wishes.directive';
@Component({
  selector: 'app-wish-list',
  imports: [HighlightFulfilledWishesDirective],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  wish = input.required<WishItems>();
  toggleItem(wish:WishItems){
    console.log(wish.isComplete);
    wish.isComplete = !wish.isComplete;
    console.log(wish.isComplete);
  }
}
