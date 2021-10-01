const model = require('../models/Football');
const teams = require('../utils/teams');


class FootballController {
    static fetchPositionsData(req, res, next) {
        model.Football.find({}).exec().then(
            res.send(teams)
        );                                         
    }
}

module.exports = FootballController;