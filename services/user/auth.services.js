
const UserModel = require("../../models/user/model");
const  notFound  = require("../util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authServices = (()=>{
    const signInService = async ({email, password})=>{      
      try {
        const foundUser = await UserModel.findOne({email});
        if(!foundUser){
          return {ok: false, msg: "User not found", status: 404}
        }
        const isMatch = bcrypt.compareSync(password, foundUser.password);
        if(!isMatch){          
          return {ok: false, msg: "Password not match", status: 401}
        }
        const token = jwt.sign({id: foundUser._id}, process.env.SECRET_KEY, {expiresIn: "1h"});
        if(!token){          
          return {ok: false, msg: "Token not found", status: 401}
        }
        return {
          ok: true,
          data:{
            token,
            foundUser
          },
          status: 200
        }        
      } catch (error) {
        notFound(404, "User not found")
      }        
    };

    const signUpService = async ({username, password, email})=>{            
      try {
        const foundUser = await  UserModel.findOne({email});        
         if(foundUser){          
          return {ok: false, msg: "User already exist", status: 409}
         }
         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(password, salt);
         
         const newUser = new UserModel({
           username,
           password: hash,
           email
         });
         const savedUser = await  newUser.save();
         if(!savedUser){
          return {ok: false, msg: "User not saved", status: 500}
         }         
         return {ok: true, data: savedUser, status: 202};
     } catch (error) {
        return {ok: false, msg: error.message, status: 500}
     }  

    };
    const getUserService = async (email)=>{

      try {
        const user = await UserModel.findOne({email});
        if(!user){
          return {ok: false, msg: "User not found", status: 404}
        }
        return {
          ok: true,
          data: user,
          status: 200
        }
      } catch (error) {
        return {ok: false, msg: error.message, status: 500}
      }

    };

    return {
      signInService,
      signUpService,
      getUserService
    }
})();


module.exports = authServices;