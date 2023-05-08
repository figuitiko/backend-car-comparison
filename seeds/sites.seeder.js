const siteCarsModel = require('../models/siteCars/model');
const sites = require('./data/sites');

const setSites = async () => {
  try {
    await siteCarsModel.deleteMany({});

    sites.forEach(async (site) => {  
      console.log(site);      
        const newSite = new siteCarsModel(site);    
        await newSite.save();
    });
    
  } catch (error) {
    console.log(error);
  }

};

module.exports = setSites;