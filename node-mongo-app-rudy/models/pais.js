const mongoose = require('../db');

const paisSchema = new mongoose.Schema({
    Region: String,
    IncomeGroup: String,
    SpecialNotes: String,
    TableName: String
});

const Pais = mongoose.model('Pais', paisSchema);

module.exports = Pais;