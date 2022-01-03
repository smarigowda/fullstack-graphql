/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

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
  // User: {},
};
