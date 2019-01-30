import { PrecisionInterface } from '@deboertool/vo-precision'
import { UnitInterface, Factory as UnitFactory } from '@deboertool/vo-unit'
import IMeasurement from './Interfaces/Measurement'

export default class Measurement implements IMeasurement  {
  constructor (
    protected _value: number, 
    protected _precision: PrecisionInterface,
    protected _units: UnitInterface
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
