interface Space {
  sNum: number
  mNum: number
  lNum: number
  s: string
  m: string
  l: string
}

const S = 8
const M = 12
const L = 24

export const space: Space = {
  sNum: S,
  mNum: M,
  lNum: L,
  s: `${S}px`,
  m: `${M}px`,
  l: `${L}px`
}
