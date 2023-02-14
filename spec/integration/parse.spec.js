const parse = require('../../src/cli/parse')

describe('Parse', () => {
  describe('Longitude', () => {
    it('throws error if not present', () => {
      const args = [ '' ]
      expect(() => parse(args)).toThrowError("Longitude is required")
    })

    it('throws error if empty str', () => {
      const args = [ 'lon=' ]
      expect(() => parse(args)).toThrowError("Longitude must be a number")
    })

    it('throws error if not a Number', () => {
      const args = [ 'lon=a' ]
      expect(() => parse(args)).toThrowError("Longitude must be a number")
    })
  })

  describe('Latitude', () => {
    it('throws error if not present', () => {
      const args = [ 'lon=50' ]
      expect(() => parse(args)).toThrowError("Latitude is required")
    })

    it('throws error if empty str', () => {
      const args = [ 'lon=50', 'lat=' ]
      expect(() => parse(args)).toThrowError("Latitude must be a number")
    })

    it('throws error if not a Number', () => {
      const args = [ 'lon=50', 'lat=a' ]
      expect(() => parse(args)).toThrowError("Latitude must be a number")
    })
  })

  describe('Filepath', () => {
    it('throws error if not found', () => {
      const args = [ '', './demo/node_modules/.bin/cli', 'lon=50', 'lat=50' ]
      expect(() => parse(args, 'invalid.json')).toThrowError("ENOENT: no such file or directory, lstat 'demo/invalid.json'")
    })

    it('throws error if not a file', () => {
      const args = [ '', './bin/cli', 'lon=50', 'lat=50' ]
      expect(() => parse(args, 'spec')).toThrowError("invalid filepath provided")
    })
  })

  describe('Data validation', () => {
    it('throws error if not valid', () => {
      const args = [ '', './bin/cli', 'lon=50', 'lat=50' ]
      expect(() => parse(args, 'spec/fixtures/invalid.json')).toThrowError("data not valid")
    })
  })

  describe('Parses successfully', () => {
    it('returns location and data', () => {
      const args = [ '', './bin/cli', 'lon=50', 'lat=50' ]
      const { location, data } = parse(args, 'spec/fixtures/patients.json')
      expect(location.longitude).toEqual(50)
      expect(location.latitude).toEqual(50)
      expect(data.length).toEqual(20)
    })
  })
})
