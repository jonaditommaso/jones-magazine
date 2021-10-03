const PositionsModel = require('../models/Positions');
const teams = require('../utils/teams');

const positions = {}

positions.getPositions = async (req, res) => {
    await PositionsModel.find()
    res.json(teams)
}

module.exports = positions