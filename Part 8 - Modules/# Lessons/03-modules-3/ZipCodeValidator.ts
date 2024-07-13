import { Validator } from './Validator'

class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/
    return s.length === 5 && numberRegexp.test(s)
  }
}

export { ZipCodeValidator }
