const kavakService = require("../services/kavak/kavak.services");

const kavaController =  (() => {
   const getByMark = async(req, res) => {      
      const {query:{mark, model}} = req;
      try {
          const kavak = await kavakService.getByMark(mark, model);          
            res.status(kavak.status).json(kavak);         
      } catch (error) {
         res.status(404).json({error: error.message});
      }      
   }
   return {
      getByMark
   }
})();

module.exports = kavaController;