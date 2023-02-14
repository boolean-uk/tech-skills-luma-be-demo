const scorePatient = require('./scorePatient')

const getPatientList = (location, patientData, listLength=10) => {
  const lowBehaviorData = []
  const scoredPatients = patientData.map(patient => {
    const scoredPatient = {
      ...patient,
      score: scorePatient(patient, location)
    }

    if (scoredPatient.acceptedOffers + scoredPatient.canceledOffers < 25) {
      lowBehaviorData.push(scoredPatient)
    }

    return scoredPatient
  })

  sortedScoredPatients = scoredPatients.sort((a, b) => b.score - a.score)

  lowBehaviorData.forEach(patient => {
    if (Math.random(1) > 0.9) {
      sortedScoredPatients.unshift(patient)
    }
  })

  return sortedScoredPatients.slice(0, listLength)
}

module.exports = getPatientList
