const schema = require('./patientListSchema')
const Validator = require('jsonschema').Validator;
const v = new Validator();

const validatePatientListData = (data) => v.validate(data, schema)

module.exports = validatePatientListData
