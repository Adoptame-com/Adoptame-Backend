import { Account } from '@src/modules/mongo/schemas/account.schema';
import { City } from '@src/modules/mongo/schemas/city.schema';
import { HouseType } from '@src/modules/mongo/schemas/house-type.schema';
import { AdoptionUser } from '@src/modules/mongo/schemas/adoption-user.schema';
import { Adoption } from '@src/modules/mongo/schemas/adoption.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INestApplicationContext } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { statics } from '@src/statics/statics';

export default async function setSampleData(app: INestApplicationContext) {
  const accountModel = app.get<Model<Account>>(getModelToken(Account.name));
  const cityModel = app.get<Model<City>>(getModelToken(City.name));
  const houseTypeModel = app.get<Model<HouseType>>(
    getModelToken(HouseType.name),
  );
  const adoptionUserModel = app.get<Model<AdoptionUser>>(
    getModelToken(AdoptionUser.name),
  );
  const adoptionModel = app.get<Model<Adoption>>(getModelToken(Adoption.name));

  // Drop all indexes in the collections
  await accountModel.collection.dropIndexes();
  await cityModel.collection.dropIndexes();
  await houseTypeModel.collection.dropIndexes();
  await adoptionUserModel.collection.dropIndexes();
  await adoptionModel.collection.dropIndexes();

  // Delete existing data
  await accountModel.deleteMany({});
  await cityModel.deleteMany({});
  await houseTypeModel.deleteMany({});
  await adoptionUserModel.deleteMany({});
  await adoptionModel.deleteMany({});

  // Create accounts
  const accounts = [];
  for (let i = 1; i <= 10; i++) {
    accounts.push(
      new accountModel({
        name: `usuario_${i}`,
        email: `usuario_${i}@ejemplo.com`,
        password: bcrypt.hashSync(
          'ABC#abc#123',
          statics.constants.bcrypt.saltRounds,
        ),
      }),
    );
  }
  await accountModel.insertMany(accounts);

  // Create cities
  const cities = [];
  const cityNames = [
    'Ciudad de México',
    'Buenos Aires',
    'Santiago',
    'Lima',
    'Bogotá',
    'Caracas',
    'Montevideo',
    'Quito',
    'Asunción',
    'La Paz',
  ];
  cityNames.forEach((name) => {
    cities.push(new cityModel({ name }));
  });
  await cityModel.insertMany(cities);

  // Create house types
  const houseTypes = [];
  const houseTypeNames = [
    'Apartamento',
    'Casa',
    'Condominio',
    'Casa adosada',
    'Dúplex',
    'Cabaña',
    'Villa',
    'Mansión',
    'Estudio',
    'Ático',
  ];
  houseTypeNames.forEach((name) => {
    houseTypes.push(new houseTypeModel({ name }));
  });
  await houseTypeModel.insertMany(houseTypes);

  // Create adoption users
  const adoptionUsers = [];
  for (let i = 0; i < 10; i++) {
    adoptionUsers.push(
      new adoptionUserModel({
        account: accounts[i]._id,
        cellphone: `555123456${i}`,
        city: cities[i]._id,
        houseType: houseTypes[i]._id,
        dedicationTime: Math.floor(Math.random() * 5) + 1,
        previousPets: ['Perro', 'Gato', 'Pájaro'][
          Math.floor(Math.random() * 3)
        ], // Random previous pets
        interest: ['Perro', 'Gato', 'Pájaro'][Math.floor(Math.random() * 3)],
        description: `Buscando un ${['perro', 'gato', 'pájaro'][Math.floor(Math.random() * 3)]} para adoptar`,
      }),
    );
  }
  await adoptionUserModel.insertMany(adoptionUsers);

  // Create adoptions
  const adoptions = [];
  const petNames = [
    'Firulais',
    'Mishi',
    'Luna',
    'Max',
    'Lucy',
    'Rocky',
    'Sol',
    'Toby',
    'Canela',
    'Simón',
  ];
  const petGenres = ['Macho', 'Hembra'];
  const petRaces = [
    'Labrador',
    'Siames',
    'Bulldog',
    'Gato Persa',
    'Caniche',
    'Beagle',
    'Ragdoll',
    'Pastor Alemán',
    'Husky',
    'Chihuahua',
  ];
  const petDescriptions = [
    'Amigable y enérgico',
    'Tranquilo y cariñoso',
    'Le gusta jugar a buscar',
    'Independiente y leal',
    'Muy juguetón y le encanta la atención',
  ];
  const petTastes = [
    ['Huesos', 'Correr', 'Buscar'],
    ['Hierba gatera', 'Dormir', 'Trepar'],
    ['Jugar', 'Acariciar', 'Comer'],
    ['Correr', 'Saltar', 'Explorar'],
    ['Relajarse', 'Masticar', 'Jugar'],
  ];
  const petCharacteristics = [
    ['Leal', 'Enérgico', 'Amigable'],
    ['Cariñoso', 'Tranquilo', 'Independiente'],
    ['Juguetón', 'Amoroso', 'Curioso'],
    ['Alerto', 'Activo', 'Valiente'],
    ['Dócil', 'Inteligente', 'Leal'],
  ];

  for (let i = 0; i < 10; i++) {
    adoptions.push(
      new adoptionModel({
        account: accounts[i]._id,
        imagesVideoUrl: [`https://ejemplo.com/imagen${i + 1}.jpg`],
        name: petNames[i],
        city: cities[i]._id,
        age: Math.floor(Math.random() * 10) + 1, // Random age between 1 and 10
        genre: petGenres[Math.floor(Math.random() * 2)], // Random genre
        race: petRaces[i],
        weight: Math.floor(Math.random() * 30) + 5, // Random weight between 5 and 35 kg
        description: petDescriptions[Math.floor(Math.random() * 5)],
        tastes: petTastes[Math.floor(Math.random() * 5)],
        characteristics: petCharacteristics[Math.floor(Math.random() * 5)],
        quantity: 1,
        sterilized: Math.random() < 0.5, // Randomly true or false
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    );
  }
  await adoptionModel.insertMany(adoptions);
}
