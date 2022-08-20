import { Injectable } from '@angular/core';
import { ClassModel } from '../models/class.model';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  //.

  classesAvailableArray: ClassModel[] = [
    new ClassModel(
      'Art',
      'Do you like creating a mess?, Make a creative mess with these art classes',
      'Tuesday',
      '9.00am - 11.00am',
      [
        'Relaxation.',
        'Igniting Your Creativity',
        'Social interaction',
        'Boosting Your Memory',
      ],
      './assets/images/dirty-brushes.jpg',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam non
      porro facere dolorem ea ut laborum, quisquam incidunt voluptatum adipisci,
      modi ducimus amet delectus quae id consectetur impedit dignissimos
      perspiciatis architecto. Alias placeat obcaecati deserunt molestias
      repudiandae ad cumque maxime, eaque illum facilis rem repellendus suscipit
      nisi? Ut, non?`
    ),
    new ClassModel(
      'Photography',
      'Learn how to take care of your equipment and how best to use it to capture amazing photos.',
      'Wednesday',
      '7.00pm - 9.00pm',
      ['To take pictures', 'Social', 'Artistic', 'To Learn about cameras'],
      './assets/images/camera.jpg',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam non
      porro facere dolorem ea ut laborum, quisquam incidunt voluptatum adipisci,
      modi ducimus amet delectus quae id consectetur impedit dignissimos
      perspiciatis architecto. Alias placeat obcaecati deserunt molestias
      repudiandae ad cumque maxime, eaque illum facilis rem repellendus suscipit
      nisi? Ut, non?`
    ),
    new ClassModel(
      'First Aid',
      'Learn how to save a life, What could be more rewarding?',
      'Friday',
      '7.00pm - 9.00pm',
      ['To practice first aid', 'Social', 'To assess danger', 'To save lives'],
      './assets/images/first-aid.jpg',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam non
      porro facere dolorem ea ut laborum, quisquam incidunt voluptatum adipisci,
      modi ducimus amet delectus quae id consectetur impedit dignissimos
      perspiciatis architecto. Alias placeat obcaecati deserunt molestias
      repudiandae ad cumque maxime, eaque illum facilis rem repellendus suscipit
      nisi? Ut, non?`
    ),
    new ClassModel(
      'Computers ',
      'Do you struggle with simple computer tasks?, well struggle no more!!',
      'Friday',
      '7.00pm - 9.00pm',
      ['To practice first aid', 'Social', 'To assess danger', 'To save lives'],
      './assets/images/computer.jpg',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam non
      porro facere dolorem ea ut laborum, quisquam incidunt voluptatum adipisci,
      modi ducimus amet delectus quae id consectetur impedit dignissimos
      perspiciatis architecto. Alias placeat obcaecati deserunt molestias
      repudiandae ad cumque maxime, eaque illum facilis rem repellendus suscipit
      nisi? Ut, non?`
    ),
    new ClassModel(
      'Cookery',
      'From the simple to the sublime, Learn to cook it all with these classes',
      'Friday',
      '7.00pm - 9.00pm',
      ['To practice first aid', 'Social', 'To assess danger', 'To save lives'],
      './assets/images/cookery.jpg',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam non
      porro facere dolorem ea ut laborum, quisquam incidunt voluptatum adipisci,
      modi ducimus amet delectus quae id consectetur impedit dignissimos
      perspiciatis architecto. Alias placeat obcaecati deserunt molestias
      repudiandae ad cumque maxime, eaque illum facilis rem repellendus suscipit
      nisi? Ut, non?`
    ),
  ];

  retrieveClassArray() {
    return this.classesAvailableArray.slice();
  }

  retrieveSingleClass(id: number) {
    return this.classesAvailableArray[id];
  }
  constructor() {}
}

// Photo dirty-brushes by Yannis Papanastasopoulos @ unsplash
// Photo camera by NordWood Themes @ unsplash
// Photo first-aid by Mat Napo @ unsplash
// Photo cookery by Louis Hansel @ unsplash
// Photo computer by Clément Hélardot @ unsplash
