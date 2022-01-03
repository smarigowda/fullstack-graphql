/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const pets = [
  {
    id: "1234",
    createdAt: "10/11/21",
    name: "Milo",
    type: "dog",
    userId: "jBWMVGjm50l6LGwepDoty",
  },
  {
    id: "1235",
    createdAt: "10/10/21",
    name: "Milo 2",
    type: "dog 2",
    userId: "jBWMVGjm50l6LGwepDoty",
  },
  {
    id: "1236",
    createdAt: "10/10/22",
    name: "Daber",
    type: "dog",
    userId: "jBWMVGjm50l6LGwepDoty",
  },
  {
    id: "1236",
    createdAt: "10/10/22",
    name: "new Dog",
    type: "Labradon",
    userId: "jBWMVGjm50l6LGwepDoty",
  },
];

module.exports = {
  Query: {
    pets: (_, { input }, { models: db }) => {
      return db.Pet.findMany(input);
    },
    pet: (_, { input }, { models: db }) => {
      return db.Pet.findOne(input);
    },
  },
  Mutation: {
    newPet: (_, { input }, { models: db }) => {
      const newPet = {
        id: "1236",
        createdAt: "10/10/22",
        name: input.name,
        type: input.type,
      };

      db.Pet.create(newPet);
      return newPet;
    },
  },
  Pet: {
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
    owner: (pet, _, { models: db }) => {
      return db.User.findOne();
    },
  },
  User: {
    pets: (user, _, { modesl: db }) => {
      return pets;
    },
  },
};
