const { animalsModel } = require('../Modules/Data.Modules');
const adoptionHandler = async(req,res) => {
    await animalsModel.find({}, (error, data) => {
        if (error) {
            console.log('here')
        }
        // console.log(data[0]);
        res.json(data);
    });
}
module.exports=adoptionHandler;