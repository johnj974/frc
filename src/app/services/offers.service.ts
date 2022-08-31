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
      'D.I.Y',
      'We aim to make home repairs affordable, allowing vulnerable members of our community to live independently in their own homes in a safe and secure environment.',
      'This is one of our more used services as we provide the labour for a lot of small jobs. Painting, decorating, gardening, power-hosing jobs are within our range. Our clients are comfortable with our staff and are reassured that the job will be done economically and to a high standard.',
      [
        {
          title: 'Wash & Dry per 10kg load',
          price: '15',
        },
        {
          title: 'Dry only per 10kg load',
          price: '8',
        },
        {
          title: 'Wash only per 10kg load',
          price: '8',
        },
      ],
      './assets/images/tools.jpg',
      'GRASS CUTTING',
      'We offer a lawn cutting service to vulnerable members of our community. Let us help you keep your garden trim and in order over the summer months.',
      'Let us help you. We offer very good rates.',
      [
        {
          title: 'Small Lawn',
          price: '20',
        },
        {
          title: 'Medium Lawn',
          price: '35',
        },
        {
          title: 'Large Lawn',
          price: '50',
        },
      ],
      './assets/images/lawn-mower.jpg'
    ),
    new OffersModel(
      'Laundry',
      'We offer a range of services including washing, drying, ironing and dry cleaning service is accommodated. ',
      'laundry',
      './assets/images/washing-machine.jpg',
      'Wash and dry',
      'We will wash, dry and fold your clothes, towels, bed linen etc.',
      'All your items are ready to be put straight into the hot-press or chest of drawers. We also offer a wash only or dry only service',
      [
        {
          title: 'Wash & Dry per 10kg load',
          price: '15',
        },
        {
          title: 'Dry only per 10kg load',
          price: '8',
        },
        {
          title: 'Wash only per 10kg load',
          price: '8',
        },
      ],
      './assets/images/washing-machines.jpg',
      'Ironing',
      'Tired of ironing?',
      'Let us help you. We offer very good rates.',
      [
        {
          title: 'Shirts',
          price: '1',
        },
        {
          title: 'Pantss',
          price: '2',
        },
        {
          title: 'Sheets',
          price: '2',
        },
        {
          title: 'Duvet covers',
          price: '2',
        },
      ],
      './assets/images/iron.jpg'
    ),
    new OffersModel(
      'Creche',
      'Little Voyagers Childcare comprises a crèche, pre-school & after school club!',
      'creche',
      './assets/images/paint-brushes.jpg',
      'Wash and dry',
      'We will wash, dry and fold your clothes, towels, bed linen etc.',
      'All your items are ready to be put straight into the hot-press or chest of drawers. We also offer a wash only or dry only service',
      [
        {
          title: 'Wash & Dry per 10kg load',
          price: '15',
        },
        {
          title: 'Dry only per 10kg load',
          price: '8',
        },
        {
          title: 'Wash only per 10kg load',
          price: '8',
        },
      ],
      './assets/images/lumber.jpg',
      'Ironing',
      'Tired of ironing?',
      'Let us help you. We offer very good rates.',
      [
        {
          title: 'Shirts',
          price: '1',
        },
        {
          title: 'Pantss',
          price: '2',
        },
        {
          title: 'Sheets',
          price: '2',
        },
        {
          title: 'Duvet covers',
          price: '2',
        },
      ],
      './assets/images/lumber.jpg'
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
// photo washing-machines by Anca Gabriela Zosin @ unsplash
// photo iron by Filip Mroz
// photo lawn-mower by Daniel Watson
// Photo tools by Barn Images
