const brandServices = require("../services/brand/brand.services");

const brandController = () =>{
    const getBrands = async (req, res) => {
        try {
            const brands = await brandServices.getBrands();
            res.status(200).json(brands);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    const addBrand = async (req, res) => {
        const {body} = req;
        try {
            const brand = await brandServices.addBrand(body);
            res.status(202).json(brand);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    const removeBrand = async (req, res) => {
        const {brandId} = req.params;
        try {
            const brand = await brandServices.removeBrand(brandId);
            res.status(204).json(brand);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    const addCarModelsToBrand = async (req, res) => {
        const {brandId} = req.params;
        const {body} = req;
        try {
            const brand = await brandServices.addCarModelsToBrand(brandId, body);
            res.status(202).json(brand);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    const removeModelsFromBrand = async (req, res) => {
        const {brandId} = req.params;
        const {body} = req;
        try {
            const brand = await brandServices.removeModelsFromBrand(brandId, body);
            res.status(204).json(brand);
        } catch (error) {
            res.status(404).json({message: error.message});
        }

    }

    return {
      getBrands,
      addBrand,
      removeBrand,
      addCarModelsToBrand,
      removeModelsFromBrand
    };
}

module.exports = brandController;