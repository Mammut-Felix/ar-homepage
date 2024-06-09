import axios from 'axios'

export default defineEventHandler(async () => {
  const storage = useStorage('data')

  const cached = await storage.getItem('cache:api:live')
  if (cached) {
    return cached
  }

  let authToken = await storage.getItem('authToken')

  if (!authToken) {
    const runtimeConfig = useRuntimeConfig()

    const { data } = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: runtimeConfig.twitch.clientId,
        client_secret: runtimeConfig.twitch.clientSecret,
        grant_type: 'client_credentials'
      }
    })

    await storage.setItem('twitch:authToken', data.access_token, { ttl: data.expires_in })

    authToken = data.access_token
  }

  const runtimeConfig = useRuntimeConfig()

  const { data } = await axios.get(
    'https://api.twitch.tv/helix/streams?user_login=jennysview&type=live',
    {
      headers: {
        'Client-ID': runtimeConfig.twitch.clientId,
        Authorization: 'Bearer ' + authToken
      }
    }
  )

  if (data.data.length === 0) {
    await storage.setItem('cache:api:live', { isLive: false }, { ttl: 60 })

    return {
      isLive: false
    }
  }

  await storage.setItem(
    'cache:api:live',
    {
      isLive: true,
      stream: {
        id: data.data[0].id,
        title: data.data[0].title,
        viewerCount: data.data[0].viewer_count,
        thumbnailUrl: data.data[0].thumbnail_url
      }
    },
    { ttl: 60 }
  )

  return {
    isLive: true,
    stream: {
      id: data.data[0].id,
      title: data.data[0].title,
      viewerCount: data.data[0].viewer_count,
      thumbnailUrl: data.data[0].thumbnail_url
    }
  }
})
