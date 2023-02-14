const getPatientList = require('../../src/getPatientList')
const patientData = require('../fixtures/patients.json')

describe('Get Patient List', () => {
  let mathMock, location
  beforeEach(() => {
    mathMock = jest.spyOn(global.Math, "random")
    location = {
      "latitude": "50",
      "longitude": "50"
    }
  })
  afterEach(() => {
    mathMock.mockRestore();
  })

  it('returns top ten patients by default with no random patients', () => {
    mathMock.mockReturnValue(0.8)
    const expected = require('../fixtures/results/topTenNoRandom')

    expect(getPatientList(location, patientData)).toEqual(expected)
  })

  it('returns top 3 patient with no random patients', () => {
    mathMock.mockReturnValue(0.8)
    const expected = require('../fixtures/results/topThreeNoRandom')

    expect(getPatientList(location, patientData, 3)).toEqual(expected)
  })

  it('returns top 3 patients with 1 random patient', () => {
    mathMock
      .mockReturnValueOnce(0.91)
      .mockReturnValue(0.8)
    const expected = require('../fixtures/results/topThreeOneRandom')

    expect(getPatientList(location, patientData, 3)).toEqual(expected)
  })

  it('returns top 3 patients with any random patient', () => {
    mathMock.mockReturnValue(0.91)
    const expected = require('../fixtures/results/topThreeAnyRandom')

    expect(getPatientList(location, patientData, 3)).toEqual(expected)
  })
})
