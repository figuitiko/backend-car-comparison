const BrandModel = require("../models/brand/model");
const ModelOfCarModel = require("../models/model-of-car/model");
const scrapperServices = require("../services/scrapper.services");

const {getResults} = scrapperServices();
const brandModelKavakSeeder = async (brand)=>{

  const checkBrandExist = await BrandModel.findOne({ brandName: brand });

  if (checkBrandExist) return console.log('Brand already exist');

  const $ = await getResults(`${process.env.KAVAK_BASE_URL}/marca-${brand}`);
  let models = new Set();

  $('.items-wrapper .item').each((i, el) => {
    let model = $(el).find('h3.pricing-title').text();

    if (model && model.indexOf(' ') !== -1 && model !== brand) {
      model = model.split(' ').join('_')
      models.add(model);
    } else if (model !== brand) {
      models.add(model);
    }
  })
  models = [...models];
  const newBrand = new BrandModel({
    brandName: brand,
  });
  let savedBrand = await newBrand.save();
  models.forEach(async (model) => {
    const newModel = new ModelOfCarModel({ modelName: model });
    const savedModel = await newModel.save();
    savedBrand = await BrandModel.findByIdAndUpdate(savedBrand._id, { $push: { modelOfCars: savedModel._id } }, { new: true });
  });


  console.log(savedBrand);


}

module.exports = brandModelKavakSeeder;