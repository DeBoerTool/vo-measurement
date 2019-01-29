import ValueObject from '@deboertool/value-object-interface'

interface Measurement extends ValueObject<number> {
  clone (value: number): Measurement
  times (value: number): Measurement
  minus (value: number): Measurement
}

export default Measurement
