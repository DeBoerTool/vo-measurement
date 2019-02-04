import ValueObject from '@deboertool/value-object-interface'
import { IPrecision } from '@deboertool/vo-precision'
import { IUnit } from '@deboertool/vo-unit'

export type ValueRange = [number, number]

interface IMeasurement extends ValueObject<number> {
  precision (): IPrecision
  unit (): IUnit
  clone (value: number): IMeasurement
  times (value: number): IMeasurement
  minus (value: number): IMeasurement
  plus (value: number): IMeasurement
  isGreaterThan (comparison: IMeasurement | number): boolean
  isGreaterThanOrEqualTo (comparison: IMeasurement | number): boolean
  isEqualTo (comparison: IMeasurement | number): boolean
  isLessThan (comparison: IMeasurement | number): boolean
  isLessThanOrEqualTo (comparison: number): boolean
  isInRange (range: ValueRange): boolean
}

export default IMeasurement