interface Shadow {
  default: string
  hover: string
  list: string
  card: Card
}

interface Card {
  default: string
  hover: string
  pressed: string
  picked: string
}

const card: Card = {
  default: '8px 8px 40px rgba(159, 194, 225, 0.15)',
  hover: '8px 8px 40px rgba(159, 194, 225, 0.3)',
  pressed: '0px 0px 2px rgba(67, 133, 198, 0.25)',
  picked: '8px 8px 50px rgba(159, 194, 225, 0.15)'
}

export const shadow: Shadow = {
  default: '0px 4px 10px rgba(67, 133, 198, 0.25)',
  hover: '0px 4px 6px rgba(67, 133, 198, 0.4)',
  list: '0px 2px 10px rgba(155, 180, 203, 0.5)',
  card
}
