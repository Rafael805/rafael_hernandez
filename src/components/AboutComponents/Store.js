import { createRef } from 'react';
import { Vector3 } from 'three';

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: 'Nature',
      aspect: 1.51,
      text:
        'There is no better designer than nature. Nature is about balance. All the world comes in pairs - Yin and Yang, right and wrong, men and women; whats pleasure without pain?',
    },
    {
      offset: 2,
      factor: 2.0,
      header: 'Music',
      aspect: 1.5,
      text:
        'Music gives a soul to the universe, wings to the mind, and flight to the imagination. Everything in the universe has a rhythm, everything dances.',
    },
    {
      offset: 3,
      factor: 2.25,
      header: 'Balance',
      aspect: 1.5037,
      text:
        'Yin and yang, male and female, strong and weak, rigid and tender, heaven and earth, light and darkness, thunder and lightning, cold and warmth, good and evil...the interplay of opposite principles constitutes the universe.',
    },
    {
      offset: 4,
      factor: 2.0,
      header: 'Meh',
      aspect: 0.665,
      text:
        'I think the next best thing to solving a problem is finding some humor in it.',
    },
    {
      offset: 5,
      factor: 1.75,
      header: 'Roots',
      aspect: 1.55,
      text:
        'We inherit from our ancestors gifts so often taken for granted. Each of us contains within this inheritance of soul. We are links between the ages, containing past and present expectations, sacred memories and future promise.',
    },
    {
      offset: 7,
      factor: 1.05,
      header: 'The Factory',
      aspect: 1.77,
      text:
        'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
    },
  ],
  stripes: [
    { offset: 0, color: '#000', height: 13 },
    { offset: 6.3, color: '#000', height: 20 },
  ],
  diamonds: [
    { x: 0, offset: 0, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    //   { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    //   { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    //   { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    //   { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    //   { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    //   { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    //   { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 },
  ],
  top: createRef(),
};

export default state;
