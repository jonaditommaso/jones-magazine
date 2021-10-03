// const positionsController = require('../controllers/footballController');


// module.exports = app => {                  //que queres que haga cuando se visite la ruta
//     app.get('/api/football/positionsData', positionsController.fetchPositionsData); 
// };

const { Router } = require('express');
const router = Router();
const { getPositions } = require('../controllers/positionsController.js');

router.route('/')
    .get(getPositions)

module.exports = router