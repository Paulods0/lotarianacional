export interface IDailyResult {
  id: string
  date: Date
  results: IResult[]
}

export interface IResult {
  id: string
  name: string
  hour: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
  createdAt: Date
}

export interface INews {
  id: string
  title: string
  image: string
  description: string
  createdAt: string
}

export interface IAgency {
  id: string
  name: string
  // phone: number
  latitude: number
  longitude: number
  location_text: string
  createdAt: Date
}

export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  profilePic?: string | Buffer
  createdAt: Date
}