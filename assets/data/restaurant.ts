export const getDishById = (id: number) => {
  const meals = restaurant.food.flatMap((category) => category.meals);
  return meals.find((meal) => meal.id === id);
};

export const restaurant = {
  name: 'Zingo',
  rating: '4.5 Excellent',
  ratings: '(500+)',
  img: require('@/assets/data/r1.jpg'),
  distance: '0.5km away',
  delivery: '10 - 15 mins',
  about:
    'The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.',
  tags: ['Italian', 'Pizza', 'Pasta', 'Salads', 'Coffee'],
  food: [
    {
      category: 'Meal deals',
      meals: [
        {
          id: 1,
          name: 'Special Biriyani',
          price: 3500,
          info: 'Aromatic rice, tender meat  fragrant spices, saffron, caramelized onions, and fresh herbs. Layered and slow-cooked for a rich, flavorful dish.',
          img: require('@/assets/data/1.jpg'),
        },
        {
          id: 2,
          name: 'Tasty Spicy Burger',
          price: 850,
          info: 'Juicy beef, cheddar, lettuce, tomato, pickles, onions, brioche bun, ketchup, mustard.',
          img: require('@/assets/data/2.jpg'),
        },
        {
          id: 3,
          name: 'Pani puri',
          price: 450,
          info: 'Crispy puris filled with spicy, tangy tamarind water, chickpeas, potatoes, and chutneys. A burst of flavors in every bite!',
          img: require('@/assets/data/3.jpg'),
        },
        {
          id: 4,
          name: 'Noodles',
          price: 1800,
          info: 'Stir-fried noodles with fresh vegetables, soy sauce, garlic, and ginger with with soft drinks',
          img: require('@/assets/data/4.jpg'),
        },
      ],
    },
    {
      category: 'Pasta',
      meals: [
        {
          id: 5,
          name: 'Arrabbiata',
          price: 2300,
          info: 'Tomato sauce, chilli, garlic, and onions',
          img: require('@/assets/data/5.jpg'),
        },
        {
          id: 6,
          name: 'Pomodoro e Mozzarella',
          price: 2900,
          info: 'Tomato sauce, onions, mozzarella',
          img: require('@/assets/data/6.jpg'),
        },
      ],
    },

    {
      category: 'Pizza',
      meals: [
        {
          id: 7,
          name: 'Salame',
          price: 3990,
          info: 'Spicy Italian sausage, tomato sauce, mozzarella',
          img: require('@/assets/data/7.jpg'),
        },
        {
          id: 8,
          name: 'Margherity',
          price: 2990,
          info: 'Tomato sauce, mozzarella',
          img: require('@/assets/data/8.jpg'),
        },
      ],
    },

    {
      category: 'Salad',
      meals: [
        {
          id: 9,
          name: 'Insalata Mista Piccola',
          price: 1800,
          info: 'Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.',
          img: require('@/assets/data/9.jpg'),
        },
        {
          id: 10,
          name: 'Insalata Mista della Casa',
          price: 1900,
          info: 'Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.',
          img: require('@/assets/data/10.jpg'),
        },
      ],
    },

    {
      category: 'Meal deals',
      meals: [
        {
          id: 1,
          name: 'Biriyani',
          price: 3500,
          info: 'Aromatic rice, tender meat  fragrant spices, saffron, caramelized onions, and fresh herbs. Layered and slow-cooked for a rich, flavorful dish.',
          img: require('@/assets/data/1.jpg'),
        },
        {
          id: 2,
          name: 'Tasty Spicy Burger',
          price: 850,
          info: 'Juicy beef, cheddar, lettuce, tomato, pickles, onions, brioche bun, ketchup, mustard',
          img: require('@/assets/data/2.jpg'),
        },
        {
          id: 3,
          name: 'Pani puri',
          price: 450,
          info: 'Crispy puris filled with spicy, tangy tamarind water, chickpeas, potatoes, and chutneys. A burst of flavors in every bite!',
          img: require('@/assets/data/3.jpg'),
        },
        {
          id: 4,
          name: 'Noodles',
          price: 1800,
          info: 'Stir-fried noodles with fresh vegetables, soy sauce, garlic, and ginger with with soft drinks',
          img: require('@/assets/data/4.jpg'),
        },
      ],
    },

    {
      category: 'Pasta',
      meals: [
        {
          id: 5,
          name: 'Arrabbiata',
          price: 2300,
          info: 'Tomato sauce, chilli, garlic, and onions',
          img: require('@/assets/data/5.jpg'),
        },
        {
          id: 6,
          name: 'Pomodoro e Mozzarella',
          price: 2900,
          info: 'Tomato sauce, onions, mozzarella',
          img: require('@/assets/data/6.jpg'),
        },
      ],
    },

    {
      category: 'Pizza',
      meals: [
        {
          id: 7,
          name: 'Salame',
          price: 3990,
          info: 'Spicy Italian sausage, tomato sauce, mozzarella',
          img: require('@/assets/data/7.jpg'),
        },
        {
          id: 8,
          name: 'Margherity',
          price: 2990,
          info: 'Tomato sauce, mozzarella',
          img: require('@/assets/data/8.jpg'),
        },
      ],
    },

    {
      category: 'Salad',
      meals: [
        {
          id: 9,
          name: 'Insalata Mista Piccola',
          price: 1800,
          info: 'Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.',
          img: require('@/assets/data/9.jpg'),
        },
        {
          id: 10,
          name: 'Insalata Mista della Casa',
          price: 1900,
          info: 'Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.',
          img: require('@/assets/data/10.jpg'),
        },
      ],
    },
  ],
};
