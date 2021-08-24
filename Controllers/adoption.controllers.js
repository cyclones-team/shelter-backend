const { animalsModel } = require('../Modules/Data.Modules');
const adoptionHandler = async (req, res) => {
    await animalsModel.find({}, (error, data) => {
        if (error) {
            console.log('here')
        }
        res.json(data);
    });
}
const deleteHandler = (req, res) => {
    animalsModel.findOne({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            data.animals.splice(req.params.id, 1);
            data.save();
            res.send(data);
        }
    })
}
module.exports = { adoptionHandler, deleteHandler };