const BrandModel = require("../models/brand/model");
const carModel = require("../models/car/model");
const { getByMark } = require("../services/kavak/kavak.services");
const scrapperServices = require("../services/scrapper.services");

const {getResults} = scrapperServices();

const carsKavakSeeders = async (brandName) =>{

  const brand = await BrandModel.findOne({brandName}).populate('modelOfCars');
   const modelOfCars = brand.modelOfCars;
  
  modelOfCars.forEach(async (model) => {
    const result = await getByMark(brandName, model.modelName);
    
  });
  const results = await  carModel.find({brand:brandName});
  console.log(results);
  
  // models.forEach(async (model) => {
  //   const result = await getByMark(brand, 'Civic');

  // });
  

}

module.exports = carsKavakSeeders;