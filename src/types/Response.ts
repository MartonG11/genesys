import { Character } from './Character'

export type Response = {
  info: {
    count: number
    pages: number
    next?: string
    prev?: string
  }
  results: Character[]
}
