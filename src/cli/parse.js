const fs = require('fs')
const path = require('path');
const validatePatientListData = require('./validatePatientListData')
const props = {
  lon: { name: 'Longitude' },
  lat: { name: 'Latitude' }
}

const parse = (args, patientsJson='data/patients.json') => {
  const location = {}

  Object.keys(props).forEach(prop => {
    const data = args.find(arg => arg.split('=')[0] === prop)
    if (data === undefined) throw new Error(`${props[prop].name} is required`)

    const val = data.split('=')[1]
    if (isNaN(Number(val))) throw new Error(`${props[prop].name} must be a number`)

    location[props[prop].name] = Number(val)
  })

  const executingFilepath = args[1]
  let filepath
  if (executingFilepath.split('/').reverse()[1] === 'bin') {
    filepath = path.join(executingFilepath, '../..', patientsJson);
  } else {
    filepath = path.join(executingFilepath, '../../..', patientsJson);
  }

  if (!fs.lstatSync(filepath).isFile()) throw new Error("invalid filepath provided")
  const absPath = path.resolve(filepath)
  const data = require(absPath)
  const result = validatePatientListData(data)
  if (!result.valid) throw new Error("data not valid")

  return {
    location,
    data
  }
}

module.exports = parse
