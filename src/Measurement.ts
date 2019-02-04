import { IPrecision } from '@deboertool/vo-precision'
import { IUnit } from '@deboertool/vo-unit'
import IMeasurement, { ValueRange } from './IMeasurement'

export default class Measurement implements IMeasurement  
{
  constructor (
    protected _value: number, 
    protected _precision: IPrecision,
    protected _unit: IUnit
  ) {}

  value (): number 
  {
    return this._value
  }

  precision (): IPrecision
  {
    return this._precision
  }

  unit (): IUnit
  {
    return this._unit
  }

  clone (value: number): IMeasurement 
  {
    return new Measurement(value, this._precision, this._unit)
  }

  times (multiplier: number): IMeasurement 
  {
    return this.clone(
      this.value() * multiplier
    )
  }

  minus (minuend: number): IMeasurement 
  {
    return this.clone(
      this.value() - minuend
    )
  }
    
  plus (addend: number): IMeasurement 
  {
    return this.clone(
      this.value() + addend
    )
  }
    
  isGreaterThan (comparison: number): boolean
  {
    return this.value() > comparison
  }

  isGreaterThanOrEqualTo (comparison: number): boolean
  {
    return this.isGreaterThan(comparison) || this.isEqualTo(comparison)
  }

  isEqualTo (comparison: number): boolean
  {
    return this.value() === comparison
  }

  isLessThan (comparison: number): boolean
  {
    return this.value() < comparison
  }

  isLessThanOrEqualTo (comparison: number): boolean
  {
    return this.isLessThan(comparison) || this.isEqualTo(comparison)
  }

  isInRange (range: ValueRange): boolean
  {
    return this.isLessThan(range[1]) && this.isGreaterThanOrEqualTo(range[0])
  }
}
