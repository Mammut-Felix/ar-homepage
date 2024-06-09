export type LiveResponse = {
  isLive: boolean
  stream: {
    id: string
    title: string
    viewerCount: number
    thumbnailUrl: string
  }
}
