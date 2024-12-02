const logger=(req,res,next)=>{
   req.name="deepthi";
   next();
};
module.exports=logger;