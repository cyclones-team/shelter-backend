let adoptionArray=require('../Modules/Animal');
const adoptionHandler = (req,res) => {
        res.json(adoptionArray)
}
module.exports=adoptionHandler;