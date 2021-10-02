const mongoose = require('mongoose');
const {Schema} = mongoose;
const ObjectId = Schema.Types.ObjectId;

const model = module.exports;

// const footballSchema = new Schema({
model.Football = mongoose.model('football', new Schema({
    _id: {type: ObjectId, required: true}, // otras propiedades, trim: para que no hayan espacios en blanco / 
    team: {type: String, required: true}, //unique, para que no se repita.
    shield: {type: String},
    pts: {type: Number},
    pj: {type: Number},
    pg: {type: Number},
    pe: {type: Number},
    pp: {type: Number},
    gf: {type: Number},
    gc: {type: Number},
    dif: {type: Number},
    updated_at: {type: Date, default: Date.now} // o timestamps: true
})
);
// module.exports = model('Football', footballSchema)
//el new Schema se puede asignar a una variable tipo const footballSchema
//si importamos model junto con el Schema, podemos hacer..
//module.exports = model('Football', footballSchema)