import config from '@/config'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: config.theme,
    boxed: config.boxed
  }),
  getters: {},
  actions: {
    SET_THEME(theme: string) {
      this.theme = theme
    }
  }
})
