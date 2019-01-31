import ValueObject from '@deboertool/value-object-interface'
import { PrecisionInterface as IPrecision } from '@deboertool/vo-precision'
import { IUnit } from '@deboertool/vo-unit'

interface IMeasurement extends ValueObject<number> {
  precision (): IPrecision
  unit (): IUnit
  clone (value: number): IMeasurement
  times (value: number): IMeasurement
  minus (value: number): IMeasurement
}

export default IMeasurement