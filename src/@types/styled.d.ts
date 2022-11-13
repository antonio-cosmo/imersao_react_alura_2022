import { defaultTheme } from '../styles/themes/default'
import 'styled-components'

type ThemeDark = typeof defaultTheme.dark
type ThemeLight = typeof defaultTheme.light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDark extends ThemeLight {}
}