const authServices = require('../services/user/auth.services');

const {signInService, signUpService, getUserService} = authServices;

const userController =(()=>{
  const signIn = async (req, res) => {
    const { body: { email, password } } = req;
    try {
      const rsp = await signInService({ email, password });
      res.status(rsp.status).json(rsp);
    }catch(error){      
      res.status(404).json({error: error.message})
    }
  }

  const signUp = async (req, res) => {
    
    const { body: { username, password, email } } = req;
    
    try {
      const savedUser = await signUpService({ username, password, email });      
      
      res.status(savedUser.status).json(savedUser);
    }catch(error){ 
      
      res.status(404).json({error: error.message})
    }
  };

  const getUser = async (req, res) => {
    const { params: { email } } = req;    
    try {
      const user = await getUserService(email);
      console.log({user})      
      res.status(user.status).json(user);
    } catch (error) {
      console.log({error})
      res.status(404).json({error: error.message})
    }
  }

  return {
    signIn,
    signUp,
    getUser
  }
})();

module.exports = userController;