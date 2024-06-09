import type { Organization } from '../events/Event'

export type Person = {
  id: string
  name: string
}

export type MusicRecording = {
  id: string
  byArtist: Person
  duration?: string
  name: string
  urls?: {
    spotify?: string
    appleMusic?: string
    youtube?: string
  }
  previewUrl?: string
}

export type MusicAlbum = {
  id: string
  albumReleaseType: 'album' | 'broadcast' | 'ep' | 'single'
  byArtist: Person
  numTracks: number
  tracks: MusicRecording[]
  copyrightHolder?: Organization
  copyrightNotice?: string
  copyrightYear?: number
  datePublished: Date
  publisher?: Organization
  thumbnailUrl?: string
  image: string
  name: string
}

export type ReleasesResponse = {
  releases: MusicAlbum[]
  meta: {
    total: number
  }
}
