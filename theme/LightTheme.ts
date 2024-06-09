import type { ThemeTypes } from '@/types/theme/ThemeType'

const DEFAULT: ThemeTypes = {
  name: 'DEFAULT',
  dark: false,
  variables: {
    'border-color': '#e5eaef'
  },
  colors: {
    primary: '#a0f',
    secondary: '#a0f',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#8fcbd9',
    lightsecondary: '#E8F7FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    textPrimary: '#EAEFF4',
    textSecondary: '#082728',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#292c33',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
    grey: '#767676',
    white: '#ffffff'
  }
}

export { DEFAULT }
