import { Injectable } from '@angular/core';
import { OffersModel } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  //.

  // public offerOneHead: string,
  //   public offerOneDescription: string,
  //   public offerOneParagraph: string,
  //   public offerOneList: string[],
  //   public offerOneImage: string,
  //   public offerTwoHead: string,
  //   public offerTwoDescription: string,
  //   public offerTwoParagraph: string,
  //   public offerTwoList: string[],
  //   public offerTwoImage: string

  offersArray: OffersModel[] = [
    new OffersModel(
      'DIY',
      'We aim to make home repairs affordable, allowing vulnerable members of our community to live independently.',
      'diy',
      './assets/images/lumber.jpg',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      '',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      ''
    ),
    new OffersModel(
      'Laundry',
      'We offer a range of services including washing, drying, ironing and dry cleaning service is accommodated. ',
      'laundry',
      './assets/images/washing-machine.jpg',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      '',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      ''
    ),
    new OffersModel(
      'Creche',
      'Little Voyagers Childcare comprises a crèche, pre-school & after school club!',
      'creche',
      './assets/images/paint-brushes.jpg',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      '',
      '',
      '',
      '',
      [{}, {}, {}, {}],
      ''
    ),
  ];

  retrieveOffersArray() {
    return this.offersArray.slice();
  }

  retrieveSingleOffer(id: number) {
    return this.offersArray[id];
  }

  constructor() {}
}

// Photo washing machines by Ekaterina Belinskaya @ pexels
// Photo paint-brushes by Anna Kolosyuk @ unsplash
// Photo lumber by Marissa Daeger @ unsplash
