import { Surah, Verse } from "@/types/quran"

const API_BASE_URL = 'https://api.quran.com/api/v4'

export async function fetchSurahs() {
  const response = await fetch(`${API_BASE_URL}/chapters?language=en`)
  const data = await response.json()
  return data.chapters as Surah[]
}

export async function fetchSurahVerses(surahId: number) {
  const response = await fetch(
    `${API_BASE_URL}/verses/by_chapter/${surahId}?language=en&words=false&translations=131,97&fields=text_uthmani&per_page=300`
  )
  const data = await response.json()
  return data.verses.map((verse: any) => ({
    ...verse,
    translations: verse.translations.map((translation: any) => ({
      id: translation.resource_id,
      text: translation.text.replace(/<sup.*?<\/sup>/g, '')
    }))
  })) as Verse[]
}


