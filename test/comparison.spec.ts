import Precision from '@deboertool/vo-precision'
import { Factory } from '@deboertool/vo-unit'
import { expect } from 'chai'
import { Measurement } from '../'

const value = 2
const greater = value + 1
const lesser = value - 1
const precision = new Precision(2)
const unit = new Factory().make('mm')

const vo = new Measurement(value, precision, unit) 

describe('Measurement Comparison Methods', () => {
  it('compares greater than', () => {
    expect(vo.isGreaterThan(lesser)).to.equal(true)
    expect(vo.isGreaterThan(value)).to.equal(false)
    expect(vo.isGreaterThan(greater)).to.equal(false)
  })
  
  it('compares greater than or equal to', () => {
    expect(vo.isGreaterThanOrEqualTo(lesser)).to.equal(true)
    expect(vo.isGreaterThanOrEqualTo(value)).to.equal(true)
    expect(vo.isGreaterThanOrEqualTo(greater)).to.equal(false)
  })
  
  it('compares equality', () => {
    expect(vo.isEqualTo(lesser)).to.equal(false)
    expect(vo.isEqualTo(value)).to.equal(true)
    expect(vo.isEqualTo(greater)).to.equal(false)
  })
  
  it('compares less than', () => {
    expect(vo.isLessThan(lesser)).to.equal(false)
    expect(vo.isLessThan(value)).to.equal(false)
    expect(vo.isLessThan(greater)).to.equal(true)
  })
  
  it('compares less than or equal to', () => {
    expect(vo.isLessThanOrEqualTo(lesser)).to.equal(false)
    expect(vo.isLessThanOrEqualTo(value)).to.equal(true)
    expect(vo.isLessThanOrEqualTo(greater)).to.equal(true)
  })

  it('tests if the measurement is in a range', () => {
    expect(vo.isInRange([4, 10])).to.be.false
    expect(vo.isInRange([0, 3])).to.be.true
    expect(vo.isInRange([0, 2])).to.be.false
  })
})