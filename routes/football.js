const footballController = require('../controllers/footballController');


module.exports = app => {                  //que queres que haga cuando se visite la ruta
    app.get('/api/football/positionsData', footballController.fetchPositionsData); 
};