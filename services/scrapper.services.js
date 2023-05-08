const axios = require('axios');
const cheerio = require('cheerio');

const scrapperServices = (url) => {
  const getResults = async (url) => {
    try {
      const response = await axios.get(url);      
      const $ = cheerio.load(response.data);      
      return $;
    } catch (error) {
      return error;
    }
  };
  
  return {
    getResults
  }
  
};


module.exports = scrapperServices;
