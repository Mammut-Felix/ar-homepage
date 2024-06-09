import { computed } from 'vue'
import * as darkThemeColors from '@/theme/DarkTheme'
import * as lightThemeColors from '@/theme/LightTheme'

const theme = {
  theme: 'DEFAULT'
}

const getPrimary = computed(() => {
  if (theme.theme === 'DEFAULT') {
    return lightThemeColors.DEFAULT.colors.primary
  } else if (theme.theme === 'DARK_DEFAULT') {
    return darkThemeColors.DARK_DEFAULT.colors.primary
  } else {
    return lightThemeColors.DEFAULT.colors.primary
  }
})

const getLightPrimary = computed(() => {
  if (theme.theme === 'DEFAULT') {
    return lightThemeColors.DEFAULT.colors.lightprimary
  } else if (theme.theme === 'DARK_DEFAULT') {
    return darkThemeColors.DARK_DEFAULT.colors.lightprimary
  } else {
    return lightThemeColors.DEFAULT.colors.lightprimary
  }
})

const getSecondary = computed(() => {
  if (theme.theme === 'DEFAULT') {
    return lightThemeColors.DEFAULT.colors.secondary
  } else if (theme.theme === 'DARK_DEFAULT') {
    return darkThemeColors.DARK_DEFAULT.colors.secondary
  } else {
    return lightThemeColors.DEFAULT.colors.secondary
  }
})

const getLightSecondary = computed(() => {
  if (theme.theme === 'DEFAULT') {
    return lightThemeColors.DEFAULT.colors.lightsecondary
  } else if (theme.theme === 'DARK_DEFAULT') {
    return darkThemeColors.DARK_DEFAULT.colors.lightsecondary
  } else {
    return lightThemeColors.DEFAULT.colors.lightsecondary
  }
})

const getLight100 = computed(() => {
  if (theme.theme === 'DEFAULT') {
    return lightThemeColors.DEFAULT.colors.grey100
  } else if (theme.theme === 'DARK_DEFAULT') {
    return darkThemeColors.DARK_DEFAULT.colors.grey100
  } else {
    return lightThemeColors.DEFAULT.colors.grey100
  }
})

export { getLight100, getLightPrimary, getLightSecondary, getPrimary, getSecondary }
