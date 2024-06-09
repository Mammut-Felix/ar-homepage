import { MusicAlbum } from '~/types/releases/MusicAlbum'
import { fakerDE as faker } from '@faker-js/faker'
import moment from 'moment'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const releases: MusicAlbum[] = []

  // generate 100 releases
  for (let index = 0; index < 100; index++) {
    const byArtist = {
      id: faker.database.mongodbObjectId(),
      name: faker.person.fullName()
    }

    const tracks = []

    for (let index = 0; index < faker.number.int({ min: 1, max: 20 }); index++) {
      tracks.push({
        id: faker.database.mongodbObjectId(),
        byArtist,
        duration: moment.duration(faker.number.int({ min: 60, max: 300 }), 'seconds').toISOString(),
        name: faker.music.songName(),
        urls: {
          spotify: faker.internet.url(),
          appleMusic: faker.internet.url(),
          youtube: faker.internet.url()
        },
        previewUrl: faker.internet.url()
      })
    }

    releases.push({
      id: faker.database.mongodbObjectId(),
      albumReleaseType: 'single',
      byArtist,
      numTracks: tracks.length,
      tracks,
      name: faker.music.songName(),
      image: faker.image.urlPicsumPhotos(),
      datePublished: faker.date.between({
        from: moment().subtract(3, 'years').toDate(),
        to: moment().toDate()
      })
    })
  }

  let result = releases

  if (body.sort.datePublished) {
    result = result.sort((a, b) => {
      if (body.sort.datePublished === 'asc') {
        return a.datePublished.getTime() - b.datePublished.getTime()
      }

      return b.datePublished.getTime() - a.datePublished.getTime()
    })
  }

  if (body.limit) {
    result = result.slice(0, body.limit)
  }

  return {
    releases: result,
    meta: {
      total: result.length
    }
  }
})
