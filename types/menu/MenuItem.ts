type MenuItem = {
  title: string
  subtitle?: string
  href: string
  image?: string
  visible: boolean
  children?: MenuItem[]
}

export type { MenuItem }
