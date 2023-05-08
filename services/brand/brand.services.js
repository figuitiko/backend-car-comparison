const BrandModel = require("../../models/brand/model");

const brandServices = () => {

  const getBrands = async (brandName) => {
    try {
      const brands = await BrandModel.find({ brandName}).populate("carModels");
      if (!brands) {
        return { ok: false, msg: "Brands not found", status: 404 }
      }
      return {
        ok: true,
        data: brands,
        status: 200
      }
    } catch (error) {
      return { ok: false, msg: error.message, status: 500 }
    }
  };

  const addBrand = async (brandName, brandUrl, carModels) => {
    try {
      const newBrand = new BrandModel({
        brandName,
        brandUrl
      });
      const savedBrand = await newBrand.save();
      if (!savedBrand) {
        return { ok: false, msg: "Brand not saved", status: 500 }
      }

      carModels.forEach(async (model) => {
        const newModel = new carModel({
          modelName: model.modelName,
          modelUrl: model.modelUrl,
          brand: savedBrand._id
        });
        const savedModel = await newModel.save();
        if (!savedModel) {
          return { ok: false, msg: "Model not saved", status: 500 }
        }
        savedBrand.carModels.push(savedModel._id);
        await savedBrand.save();
      });


      return { ok: true, data: savedBrand, status: 202 };
    } catch (error) {
      return { ok: false, msg: error.message, status: 500 }
    }
  };

  const removeBrand = async (brandId) => {
    const removedBrand = await BrandModel.findByIdAndDelete(brandId);
    if (!removedBrand) {
      return { ok: false, msg: "Brand not found", status: 404 }
    }
    return { ok: true, data: removedBrand, status: 204}
  };

  const addCarModelsToBrand = async (brandId, carModels) => {

    const brand = await BrandModel.findById(brandId);
    if (!brand) {
      return { ok: false, msg: "Brand not found", status: 404 }
    }

    carModels.forEach(async (model) => {
      const newModel = new carModel({
        modelName: model.modelName,        
      });
      const savedModel = await newModel.save();
      if (!savedModel) {
        return { ok: false, msg: "Model not saved", status: 500 }
      }
      brand.carModels.push(savedModel._id);
      await brand.save();
    });


  };
  const removeModelsFromBrand = async (brandId, carModels) => {

    const brand = await BrandModel.findById(brandId);
    if (!brand) {
      return { ok: false, msg: "Brand not found", status: 404 }
    }

    carModels.forEach(async (model) => {
      const removedModel = await carModel.findByIdAndDelete(model._id);
      if (!removedModel) {
        return { ok: false, msg: "Model not found", status: 404 }
      }
      brand.carModels.pull(removedModel._id);
      await brand.save();
    });

    return { ok: true, data: brand, status: 202}
  }

  return {
    getBrands, 
    addBrand,
    removeBrand,
    addCarModelsToBrand,
    removeModelsFromBrand
  }
};

module.exports = brandServices();