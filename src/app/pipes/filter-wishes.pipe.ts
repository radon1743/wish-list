import { Pipe, PipeTransform } from '@angular/core';
import { WishItems } from '../../../shared/models/wishItems';

@Pipe({
  name: 'filterWishes'
})
export class FilterWishesPipe implements PipeTransform {

  transform(wishes:WishItems[], searchTerm:string): WishItems[] {
    if(searchTerm == '0'){
      return wishes;
    }
    else if (searchTerm == '1'){
      return wishes.filter(item => item.isComplete)
    }
    else{
      return wishes.filter(item => !item.isComplete)
    }
  }

}
