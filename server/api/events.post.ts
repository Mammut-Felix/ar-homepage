import { fakerDE as faker } from '@faker-js/faker'
import moment from 'moment'
import { Event } from '~/types/events/Event'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const events: Event[] = []

  // generate 100 events
  for (let index = 0; index < 100; index++) {
    const startDate = faker.date.between({
      from: moment().subtract(3, 'month').toDate(),
      to: moment().add(3, 'month').toDate()
    })

    let sponsor

    if (faker.datatype.boolean()) {
      sponsor = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        url: faker.internet.url(),
        address: {
          streetAddress: faker.location.streetAddress(),
          addressLocality: faker.location.city(),
          addressRegion: faker.location.state(),
          postalCode: faker.location.zipCode(),
          addressCountry: faker.location.country()
        }
      }
    }

    const offers = []

    if (faker.datatype.boolean()) {
      for (let index = 0; index < faker.number.int({ min: 1, max: 3 }); index++) {
        offers.push({
          url: faker.internet.url(),
          price: faker.number.float({ min: 0, max: 100, multipleOf: 2 }),
          priceCurrency: 'EUR'
        })
      }
    }

    events.push({
      id: faker.database.mongodbObjectId(),
      name: faker.lorem.words(),
      startDate,
      endDate: moment(startDate).add(3, 'hours').toDate(),
      sponsor,
      offers,
      location: {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
          streetAddress: faker.location.streetAddress(),
          addressLocality: faker.location.city(),
          postalCode: faker.location.zipCode(),
          addressCountry: faker.location.country()
        },
        geo: {
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude()
        }
      },
      eventAttendanceMode: 'OfflineEventAttendanceMode',
      description: faker.lorem.paragraph(),
      image: faker.image.urlPicsumPhotos(),
      url: faker.internet.url(),
      featured: faker.datatype.boolean()
    })
  }

  let result: Event[] = events

  if (body.sort.startDate) {
    result = result.sort((a, b) => {
      if (body.sort.startDate === 'asc') {
        return a.startDate.getTime() - b.startDate.getTime()
      }

      return b.startDate.getTime() - a.startDate.getTime()
    })
  }

  if (body.from) {
    result = result.filter(event => moment(event.startDate).isAfter(body.from))
  }

  if (body.featured) {
    result = result.filter(event => event.featured)
  }

  if (body.limit) {
    result = result.slice(0, body.limit)
  }

  return {
    events: result,
    meta: {
      total: result.length
    }
  }
})
