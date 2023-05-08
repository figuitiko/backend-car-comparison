const carModel = require("../../models/car/model");
const scrapperServices = require("../scrapper.services");

const {getResults} = scrapperServices();
const kavakService = (() =>  {
    const getByMark = async (mark, model, brand) => {

      try {
        const prices = [];      
        const $ =  await getResults(`${process.env.KAVAK_BASE_URL}/modelo-${model}/${mark}-${model}-precio`);
        
        $('.wrapper-card-car').each((i, el) => {
          const carItem ={};
          carItem.name = $(el).find('.car-name').text();
          carItem.price = $(el).find('.payment-total').text();
          carItem.year = $(el).find('.car-details').text().split(' ').slice(0, 2).join('');
          
          prices.push(carItem);          
        });
        
        if(prices.length === 0){
          return {ok:false, msg: 'Results Not found', status: 404};
        }
        //insert all the items into the database cars model
        prices.forEach(async (item) => {
          const newCar = {
            carName: item.name,
            year: item.year,
            price: item.price,
            brand: mark,
            model: model,
            
          }

          const carFound = await carModel.find({carName: item.name});
          if(carFound.length > 0){
            return;
          }
          const car = new carModel(newCar);
          await car.save();
        });

        const results = await carModel.find({brand: mark, model: model});


        return {ok:true, data:results, status: 200};    
        
      } catch (error) {
        return {ok:false, msg: error.message, status: 500};
      }
    };   
    
    

    return {
        getByMark
    }
})();

module.exports = kavakService;