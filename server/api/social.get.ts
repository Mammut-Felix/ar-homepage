import { SocialMediaItem } from '~/types/socials/SocialMediaItem'

export default defineEventHandler(async () => {
  const socials: SocialMediaItem[] = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/anastasia_rose_official/',
      icon: 'fab fa-instagram',
      followers: 66_900
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/anastasiaroseofficial',
      icon: 'fab fa-facebook',
      followers: 41_800
    },
    {
      title: 'Twitch',
      url: 'https://www.twitch.tv/anastasia_rose_official',
      icon: 'fab fa-twitch',
      followers: 175_800
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@AnastasiaRoseOfficial',
      icon: 'fab fa-youtube',
      followers: 18_700
    },
    {
      title: 'TikTok',
      url: 'https://www.tiktok.com/@anastasia_rose_official',
      icon: 'fab fa-tiktok',
      followers: 418_900
    },
    {
      title: 'X (Twitter)',
      url: 'https://twitter.com/anastasia_rose_',
      icon: 'fab fa-twitter',
      followers: 1600
    }
  ]

  return socials
})
