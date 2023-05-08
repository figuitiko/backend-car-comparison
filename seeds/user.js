const UserModel = require("../models/user/model");
const authServices = require("../services/user/auth.services");
const {signUpService} = authServices

const setUserInit = async ()=>{
  const newUser = {
    username: "admin",
    email: "frankfigao@gmail.com",
    password: "zaq123"
  }
  //find user and deleted  if exist

  const removedUser = await UserModel.findOneAndRemove({email: newUser.email});
  console.log({removedUser});  

 const rsp = await signUpService({...newUser});
 if(!rsp.ok){
    console.log(rsp.msg);
    return;
 }

 const {data} = rsp;

 const updateUser =  await UserModel.findOneAndUpdate({_id: data._id}, {isAdmin: true}, {new: true});
  console.log({updateUser});

}

module.exports = setUserInit;