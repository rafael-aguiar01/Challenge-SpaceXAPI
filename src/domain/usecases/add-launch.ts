import { LaunchModel } from '../models/launch'

export interface AddLaunchModel extends LaunchModel {
  fairings: object
  links: object
  static_fire_date_utc: string
  static_fire_date_unix: number
  net: boolean
  window: number
  rocket: string
  success: true
  failures: object[]
  details: string
  crew: any[]
  ships: any[]
  capsules: any[]
  payloads: string[]
  launchpad: string
  flight_number: number
  name: string
  date_utc: string
  date_unix: string
  date_local: string
  date_precision: string
  upcoming: boolean
  cores: object[]
  auto_update: boolean
  tbd: boolean
  launch_library_id: any
  id: string
}

export interface AddLaunch {
  add (launch: AddLaunchModel): Promise<LaunchModel>
}