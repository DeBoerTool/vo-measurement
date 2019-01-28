import { PrecisionInterface } from '@deboertool/vo-precision'
import { UnitInterface, Factory as UnitFactory } from '@deboertool/vo-unit'
import MeasurementInterface from './Interfaces/Measurement'

export default class Measurement implements MeasurementInterface  {
  constructor (
    private _value: number, 
    private _precision: PrecisionInterface,
    private _units: UnitInterface
  ) {}

  value (): number {
    return this._value
  }

  clone (value: number): MeasurementInterface {
    return new Measurement(value, this._precision, this._units)
  }

  times (multiplier: number): MeasurementInterface {
    return this.clone(
      this.value() * multiplier
    )
  }

  minus (minuend: number): MeasurementInterface {
    return this.clone(
      this.value() - minuend
    )
  }
}
