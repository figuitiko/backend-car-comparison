require('dotenv').config();
const startDb = require('../config/db.connect');
const brandModelKavakSeeder = require('./brand.model.kavak.seeder');
const carsKavakSeeders = require('./cars.kavak.seeders');
const setSites = require('./sites.seeder');
const setUserInit = require('./user');

(async () => {
  startDb();
  // await setSites();
  // await setUserInit();
  // await brandModelKavakSeeder('Audi');
  // await brandModelKavakSeeder('Alfa_Romeo');
  // await brandModelKavakSeeder('Acura');
  // await brandModelKavakSeeder('Baic');
  //  await brandModelKavakSeeder('Bmw');
  // await brandModelKavakSeeder('Buick');
  // await brandModelKavakSeeder('Cadillac');
  // await brandModelKavakSeeder('Chirey');
  // await brandModelKavakSeeder('Chevrolet');
  // await brandModelKavakSeeder('Changan');
  // await brandModelKavakSeeder('Chrysler');
  // await brandModelKavakSeeder('Cupra');
  // await brandModelKavakSeeder('Fiat');
  // await brandModelKavakSeeder('Ford');
  // await brandModelKavakSeeder('Gmc');
  // await brandModelKavakSeeder('Honda');
  // await brandModelKavakSeeder('Hyundai');
  // await brandModelKavakSeeder('Infiniti');  
  // await brandModelKavakSeeder('Isuzu');  
  // await brandModelKavakSeeder('Jac');  
  // await brandModelKavakSeeder('Jaguar');  
  // await brandModelKavakSeeder('Jeep');  
  // await brandModelKavakSeeder('Kia');  
  // await brandModelKavakSeeder('Land_Rover');  
  // await brandModelKavakSeeder('Lexus');  
  // await brandModelKavakSeeder('Lincoln');  
  // await brandModelKavakSeeder('Maserati');  
  // await brandModelKavakSeeder('Mazda');  
  // await brandModelKavakSeeder('Mercedes_Benz');  
  // await brandModelKavakSeeder('Mercury');  
  // await brandModelKavakSeeder('Mg');  
  // await brandModelKavakSeeder('Mini');  
  // await brandModelKavakSeeder('Mitsubishi');  
  // await brandModelKavakSeeder('Mini');  
  // await brandModelKavakSeeder('Nissan');  
  // await brandModelKavakSeeder('Peugeot');  
  // await brandModelKavakSeeder('Porsche');  
  // await brandModelKavakSeeder('RAM');  
  // await brandModelKavakSeeder('Renault');  
  // await brandModelKavakSeeder('Seat');  
  // await brandModelKavakSeeder('Smart');  
  // await brandModelKavakSeeder('Subaru');  
  // await brandModelKavakSeeder('Tesla');  
  // await brandModelKavakSeeder('Toyota');  
  // await brandModelKavakSeeder('Volkswagen');  
  // await brandModelKavakSeeder('Volvo'); 
  
  // await carsKavakSeeders('Audi')
  await carsKavakSeeders('Alfa_Romeo')
  await carsKavakSeeders('Acura')
  
})();

