import type { ThemeTypes } from '@/types/theme/ThemeType'

const DARK_DEFAULT: ThemeTypes = {
  name: 'DARK_DEFAULT',
  dark: true,
  variables: {
    'border-color': '#333F55'
  },
  colors: {
    primary: '#5D87FF',
    secondary: '#49BEFF',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#253662',
    lightsecondary: '#1C455D',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#2a3447',
    background: '#2a3447',
    hoverColor: '#333f55',
    surface: '#2a3447',
    'on-surface-variant': '#2a3447',
    grey100: '#333F55',
    grey200: '#465670'
  }
}

export { DARK_DEFAULT }
