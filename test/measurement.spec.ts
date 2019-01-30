import Precision from '@deboertool/vo-precision'
import Measurement from '../src/Measurement'
import { Factory } from '@deboertool/vo-unit'
import { expect } from 'chai'

const value = 12.193
const newValue = 9999

const multiplier = 7
const multValue = value * multiplier

const subtrahend = 12
const subValue = value - subtrahend

const vo = new Measurement(
  value, 
  new Precision(2), 
  new Factory().make('mm')
)

describe('Measurement', () => {
  it(
    'returns the value', 
    () => expect(vo.value()).to.equal(value)
  )

  it(
    'can be cloned with a new value', 
    () => expect(vo.clone(newValue).value()).to.equal(newValue)  
  )

  it(
    'can be multiplied',
    () => expect(vo.times(multiplier).value()).to.equal(multValue)
  )

  it(
    'can be subtracted from',
    () => expect(vo.minus(subtrahend).value()).to.equal(subValue)
  )

  it(
    'does not mutate the original object',
    () => {
      const subtracted = vo.minus(subtrahend)

      expect(vo.value()).to.equal(value)
      expect(subtracted.value()).to.equal(subValue)
    }
  )
})