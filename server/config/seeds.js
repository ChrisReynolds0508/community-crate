const db = require('./connection');
const { User, FoodBank, Filter } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Filter', 'filters');
  await cleanDB('FoodBank', 'products');
  await cleanDB('User', 'users');

  const filters = await Filter.insertMany([
    { name: 'Australian Capital Territory' },
    { name: 'New South Wales' },
    { name: 'Northern Territory' },
    { name: 'Queensland' },
    { name: 'South Australia' },
    { name: 'Tasmania' },
    { name: 'Western Australia' },
  ]);

  console.log('filters seeded');

  const products = await FoodBank.insertMany([
    {
      name: 'Harvest of Hope',
      description:
        'Harvest of Hope is dedicated to providing nutritious food to those in need in New South Wales. Our mission is to ensure that no one goes hungry and we work with local farmers and volunteers to make a positive impact on our community. Donate a crate of fresh produce and pantry staples today!',
      image: 'harvest-hope.jpg',
      filter: filters[0]._id,
      price: 15.00,
      quantity: 500
    },
    {
      name: 'Food Bridge',
      description:
        'Food Bridge aims to connect surplus food with those who need it most in New South Wales. We partner with local businesses and organizations to rescue food that would otherwise go to waste. Our goal is to reduce food insecurity and promote sustainability in our community. Donate today and help us build a Food Bridge!',
      image: 'food-bridge.jpg',
      filter: filters[0]._id,
      price: 20.00,
      quantity: 500
    },
    {
      name: 'Nourish Now',
      filter: filters[1]._id,
      description:
        'Nourish Now focuses on providing healthy meals to vulnerable populations in New South Wales. We believe that access to nutritious food is a basic human right. Through our programs, we strive to improve the well-being of individuals and families in need. Donate a meal today!',
      image: 'nourish-now.jpg',
      price: 12.00,
      quantity: 500
    },
    {
      name: 'Kindness Kitchen',
      filter: filters[1]._id,
      description: 'A charitable initiative providing nourishing meals to those in need in Queensland, made with love and care. Donate a meal today and spread kindness!',
      image: 'kindness-kitchen.jpg',
      price: 9.50,
      quantity: 50
    },
    {
      name: 'Heartland Pantry',
      filter: filters[1]._id,
      description: 'A well-stocked pantry offering essential food items sourced from local farms and suppliers. Donate a pantry bag today and support your community!',
      image: 'heartland-pantry.jpg',
      price: 30.00,
      quantity: 100
    },
    {
      name: 'Table of Hope',
      filter: filters[2]._id,
      description: 'Bringing people together through shared meals, fostering community and connection. Donate a meal today and help us set the Table of Hope!',
      image: 'table-of-hope.jpg',
      price: 13.50,
      quantity: 500
    },
    {
      name: 'Community Harvest',
      filter: filters[2]._id,
      description: 'Fresh, locally grown produce and groceries available for all, ensuring food security for everyone. Donate a grocery box today and support your community!',
      image: 'community-harvest.jpg',
      price: 29.00,
      quantity: 500
    },
    {
      name: 'Meal Mission',
      filter: filters[3]._id,
      description: 'Delivering balanced and nutritious meals to individuals and families in need, one plate at a time. Donate a meal today and join our Meal Mission!',
      image: 'meal-mission.jpg',
      price: 15.50,
      quantity: 100
    },
    {
      name: 'HelpingHands Pantry',
      filter: filters[4]._id,
      description: 'A welcoming pantry offering affordable food items to uplift and support the local community. Donate a pantry box today and lend a HelpingHand!',
      image: 'helpinghands-pantry.jpg',
      price: 19.50,
      quantity: 1000
    },
    {
      name: 'Food for All',
      filter: filters[4]._id,
      description: 'Affordable groceries made accessible to everyone, with a commitment to ending hunger. Donate a grocery box today and help us provide Food for All!',
      image: 'food-for-all.jpg',
      price: 31.00,
      quantity: 1000
    },
    {
      name: 'Goodness Grains',
      filter: filters[4]._id,
      description: 'Offering wholesome and nutritious grain products, perfect for healthy and delicious meals. Donate a grain box today and support Goodness Grains!',
      image: 'goodness-grains.jpg',
      price: 17.50,
      quantity: 100
    },
    {
      name: 'The Giving Grove',
      filter: filters[5]._id,
      description: 'Planting hope with every meal, providing fruit and vegetable produce for community nourishment. Donate a produce box today and help us grow The Giving Grove!',
      image: 'the-giving-grove.jpg',
      price: 23.00,
      quantity: 600
    },
    {
      name: 'Unity Pantry',
      filter: filters[5]._id,
      description: 'An inclusive pantry dedicated to bringing people together through the shared mission of food access. Donate a pantry box today and support Unity Pantry!',
      image: 'unity-pantry.jpg',
      price: 25.00,
      quantity: 600
    },
    {
      name: 'FeedForward',
      filter: filters[6]._id,
      description: 'Fighting food waste and hunger by redirecting surplus food to those who need it most. Donate a meal today and help us move FeedForward!',
      image: 'feed-forward.jpg',
      price: 8.50,
      quantity: 600
    },
    {
      name: 'Meals on Wheels NSW',
      filter: filters[0]._id,
      description: 'Delivering nutritious meals to seniors and homebound individuals across New South Wales. Donate a meal today and support Meals on Wheels NSW!',
      image: 'mealsonwheels-nsw.png',
      price: 19.00,
      quantity: 600
    },
    {
      name: 'Meals on Wheels QLD',
      filter: filters[1]._id,
      description: 'Providing meal delivery services for those in need throughout Queensland, with a caring touch. Donate a meal today and support Meals on Wheels QLD!',
      image: 'mealsonwheels-qld.png',
      price: 17.50,
      quantity: 600
    },
    {
      name: 'Meals on Wheels WA',
      filter: filters[4]._id,
      description: 'Serving Western Australia’s communities with freshly prepared meals delivered to your door. Donate a meal today and support Meals on Wheels WA!',
      image: 'mealsonwheels-wa.png',
      price: 18.50,
      quantity: 600
    },
    {
      name: 'Meals on Wheels SA',
      filter: filters[2]._id,
      description: 'Ensuring South Australians receive nutritious meals and social support through meal deliveries. Donate a meal today and support Meals on Wheels SA!',
      image: 'mealsonwheels-sa.jpg',
      price: 16.50,
      quantity: 600
    },
    {
      name: 'Meals on Wheels TAS',
      filter: filters[3]._id,
      description: 'Delivering meals and support to help Tasmanians live independently and maintain their well-being. Donate a meal today and support Meals on Wheels TAS!',
      image: 'mealsonwheels-tas.png',
      price: 16.00,
      quantity: 600
    }

  ]);

  console.log('food banks seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
