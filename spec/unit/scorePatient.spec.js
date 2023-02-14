const scorePatient = require('../../src/scorePatient')

describe("Score Patient", () => {
  let patient, location
  beforeEach(() => {
    patient = {
      "id": "541d25c9-9500-4265-8967-240f44ecf723",
      "name": "Samir Pacocha",
      "location": {
        "latitude": "56.7110",
        "longitude": "63.1150"
      },
      "age": 51,
      "acceptedOffers": 76,
      "canceledOffers": 49,
      "averageReplyTime": 1999
    }
    location = {
      longitude: 50,
      latitude: 50
    }
  })

  describe("Perfect Score", () => {
    it('scores a 10', () => {
      expect(scorePatient(patient, location)).toEqual(10)
    })
  })

  describe("Location", () => {
    it('Not near location reduces by 1', () => {
      location = {
        longitude: -50,
        latitude: -50
      }
      expect(scorePatient(patient, location)).toEqual(9)
    })
  })

  describe("Reply Time", () => {
    it('Reduced reply time reduced by 1', () => {
      patient.averageReplyTime = 2000
      expect(scorePatient(patient, location)).toEqual(9)
    })

    it('Slowest reply time reduced by 2', () => {
      patient.averageReplyTime = 2500
      expect(scorePatient(patient, location)).toEqual(8)
    })
  })

  describe("Accepted Offers", () => {
    it('Increased Accepted Offers reduced by 1', () => {
      patient.canceledOffers = 50
      expect(scorePatient(patient, location)).toEqual(9)
    })

    it('Further increased Canceled Offers reduced by 2', () => {
      patient.canceledOffers = 75
      expect(scorePatient(patient, location)).toEqual(8)
    })

    it('Max Canceled Offers reduced by 3', () => {
      patient.canceledOffers = 100
      expect(scorePatient(patient, location)).toEqual(7)
    })
  })

  describe("Canceled Offers", () => {
    it('Reduced Accepted Offers reduced by 1', () => {
      patient.acceptedOffers = 75
      expect(scorePatient(patient, location)).toEqual(9)
    })

    it('Further Reduced Accepted Offers reduced by 2', () => {
      patient.acceptedOffers = 50
      expect(scorePatient(patient, location)).toEqual(8)
    })

    it('Min Accepted Offers reduced by 3', () => {
      patient.acceptedOffers = 25
      expect(scorePatient(patient, location)).toEqual(7)
    })
  })
})
