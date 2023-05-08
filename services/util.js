
 const notFound  = (status, msg) =>{
  return Promise.reject({ status, msg });  
}

module.exports = notFound;