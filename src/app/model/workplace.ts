import { LocationTag } from './locationTag'

export class Workplace {
    uuid: string
    uuidLocationLevel: string
    uuidLocationType: string
    uuidLocationCategory: string
    uuidParentLocation: string
    locationTypeName: string
    locationLevelName: string
    locationCategoriesName: string
    locationCategoriesSub: string
    tags: any
    locationTags: LocationTag[] = []
    name: string
    address: string
    level: string
    levelDescription: string
    category: string
    sub: string
    latlngs: string
    polygon: string
    latitude:number
    longitude:number
    postalCode: string
    idCity: string
    cities: string
    description: string
    remarks: string
    additionalInfo: string
    selected: string
  }
  