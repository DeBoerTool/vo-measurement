import { PrecisionInterface as IPrecision } from '@deboertool/vo-precision'
import { IUnit } from '@deboertool/vo-unit'
import IMeasurement from './Interfaces/IMeasurement'

export default class Measurement implements IMeasurement  {
  constructor (
    protected _value: number, 
    protected _precision: IPrecision,
    protected _units: IUnit
  ) {}

  value (): number {
    return this._value
  }

  clone (value: number): IMeasurement {
    return new Measurement(value, this._precision, this._units)
  }

  times (multiplier: number): IMeasurement {
    return this.clone(
      this.value() * multiplier
    )
  }

  minus (minuend: number): IMeasurement {
    return this.clone(
      this.value() - minuend
    )
  }
}
