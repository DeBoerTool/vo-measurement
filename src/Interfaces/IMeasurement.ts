import ValueObject from '@deboertool/value-object-interface'

interface IMeasurement extends ValueObject<number> {
  clone (value: number): IMeasurement
  times (value: number): IMeasurement
  minus (value: number): IMeasurement
}

export default IMeasurement