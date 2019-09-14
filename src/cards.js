import dishes from './img/cards/dishes.jpg';
import food from './img/cards/food.jpg';
import jacket from './img/cards/jacket.jpg';
import laptop from './img/cards/laptop.jpg';
import shoes from './img/cards/shoes.jpg';
import skate from './img/cards/skate.jpg';

export default {
  cards: [
    {
      title: 'Skateboard',
      description: "This my skateboard! It's so cool",
      price: 100,
      img: skate,
      id: 0,
    },
    {
      title: 'Dishes',
      description: 'Dishes for my mom',
      price: 1200,
      img: dishes,
      id: 1,
    },
    {
      title: 'Food',
      description: 'Itadaki mas',
      price: 100,
      img: food,
      id: 2,
    },
    {
      title: 'Shoes',
      description: 'Govnadavs from Giorgio Armani',
      price: 600,
      img: shoes,
      id: 3,
    },
    {
      title: 'Laptop',
      description: 'Dab dab dab top',
      price: 100,
      img: laptop,
      id: 4,
    },
    {
      title: 'Jacket',
      description: 'Jackie chen wore it',
      price: 100,
      img: jacket,
      id: 5,
    },
  ],
};
