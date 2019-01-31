import { PrecisionInterface as IPrecision } from '@deboertool/vo-precision'
import { IUnit } from '@deboertool/vo-unit'
import IMeasurement from './Interfaces/IMeasurement'

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
}
