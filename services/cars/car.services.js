const carServices =() => {
  const getCars = async ({brand, model, siteUrl}) => {
    try {
      const cars = await carModel.find({brand, model, siteUrl});
      if (cars.length === 0) {
        return {ok: false, msg: 'Results Not found', status: 404};
      }
      return {ok: true, data: cars, status: 200};
    } catch (error) {
      return {ok: false, msg: error.message, status: 500};
    }
  }
}