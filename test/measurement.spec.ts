import Precision from '@deboertool/vo-precision'
import Measurement from '../src/Measurement'
import { Factory } from '@deboertool/vo-unit'
import { expect } from 'chai'

const value = 12.193

const vo = new Measurement(
  value, 
  new Precision(2), 
  new Factory().make('mm')
)

describe('Measurement', () => {
  it('returns the value', () => { 
    expect(vo.value()).to.equal(12.193) 
  })
})