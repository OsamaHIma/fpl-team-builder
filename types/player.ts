export interface Team {
  id: number
  name: string
  short_name: string
  code: number
  strength: number
  position: number
  played: number
  win: number
  loss: number
  draw: number
  points: number
  form: string | null
  unavailable: boolean
}

export interface ElementType {
  id: number
  plural_name: string
  plural_name_short: "GKP" | "DEF" | "MID" | "FWD"
  singular_name: string
  singular_name_short: string
  squad_select: number
  squad_min_play: number
  squad_max_play: number
  element_count: number
}

export interface Player {
  id: number
  first_name: string
  second_name: string
  web_name: string
  status: string
  now_cost: number
  photo: string
  form: string
  event_points: number
  total_points: number
  selected_by_percent: string
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  yellow_cards: number
  red_cards: number
  bonus: number
  team: Team
  element_type: ElementType
  is_captain: boolean
  is_vice_captain: boolean
  // position: "GKP" | "DEF" | "MID" | "FWD" removed
  price: number
  points: number
}

export interface TeamStats {
  totalCost: number
  totalPoints: number
  bank: number
  transfers: number
}

export interface Filters {
  position?: string
  team?: string
  priceMin?: number
  priceMax?: number
}
