export type Character = {
  id: number
  created: string
  episode: string[]
  gender: string
  image: string
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  species: string
  status: string
  url: string
  type?: string
}
