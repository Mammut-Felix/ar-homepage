import axios from 'axios'

export default defineEventHandler(async () => {
  const storage = useStorage('data')

  const cached = await storage.getItem('cache:api:live')
  if (cached) {
    return cached
  }

  let authToken = await storage.getItem('authToken')

  if (!authToken) {
    const { data } = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: '80cvhb2dh1gzfvg0gbpb7lgjfvcve2',
        client_secret: 'vw92qvme7wbnn8hce2z1illcaaplpg',
        grant_type: 'client_credentials'
      }
    })

    await storage.setItem('twitch:authToken', data.access_token, { ex: data.expires_in })

    authToken = data.access_token
  }

  const { data } = await axios.get(
    'https://api.twitch.tv/helix/streams?user_login=anastasia_rose_official&type=live',
    {
      headers: {
        'Client-ID': '80cvhb2dh1gzfvg0gbpb7lgjfvcve2',
        Authorization: 'Bearer h4ohrx00hc0mbcqvdapp275vu2ng2e'
      }
    }
  )

  if (data.data.length === 0) {
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
    { ex: 60 }
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
