import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishItems } from '../../shared/models/wishItems';
import { FilterWishesPipe } from './pipes/filter-wishes.pipe';
import { HighlightFulfilledWishesDirective } from './highlight-fulfilled-wishes.directive';
import { WishListComponent } from './components/wish-list/wish-list.component';
@Component({
  selector: 'app-root',
  imports: [FormsModule,FilterWishesPipe,HighlightFulfilledWishesDirective,WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishList = signal<Array<WishItems>>([
    new WishItems('To learn Angular'),
    new WishItems('Get some Tea',true),
    new WishItems('Get an internship',true)
    
  ]);
  
  
  addNewWish(newWish:String){
    console.log("new wish added");
    this.wishList.update(wishes =>{
      return [...wishes, new WishItems(newWish,false)];
    });

  }
  
  title = 'wishlist';
}
