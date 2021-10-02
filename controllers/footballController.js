const model = require('../models/Football');
const teams = require('../utils/teams');

// const positions = {}

// positions.getPositions = async (req, res) => {
//     await footballModel.find({}).exec()
//     res.send(teams)
// }


// module.exports = positions
class FootballController {
    static fetchPositionsData(req, res, next) {
        model.Football.find({}).exec().then(
            res.send(teams)
        );                                         
    }
}

module.exports = FootballController;