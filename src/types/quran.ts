export interface Surah {
  id: number
  name_arabic: string
  name_simple: string
  verses_count: number
  revelation_place: string
  translated_name: {
    name: string
  }
}

export interface Verse {
  id: number
  verse_key: string
  text_uthmani: string
  translations: {
    id: number
    text: string
  }[]
}

