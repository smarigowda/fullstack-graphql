const nanoid = require("nanoid");

const createPetModel = (db) => {
  return {
    findMany() {
      return db.get("pet");
    },

    findOne(filter) {
      return db.get("pet").find(filter).value();
    },

    create(pet) {
      const newPet = { id: nanoid(), createdAt: Date.now(), ...pet };

      db.get("pet").push(newPet).write();

      return newPet;
    },
  };
};

module.exports = createPetModel;
