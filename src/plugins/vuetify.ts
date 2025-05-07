import 'vuetify/styles' // Import Vuetify styles
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#42A5F5',        // Deep indigo - trustworthy, stable
          secondary: '#F5F5F5',      // Warm amber - positive, energetic
          success: '#388E3C',        // Muted green - success with maturity
          error: '#C62828',          // Strong red - for visibility, not aggressive
          accent: '#66BB6A',         // Elegant purple - optional highlight
          background: '#FAFAFA',     // Gentle light gray
          surface: '#FFFFFF',        // White for cards/sheets
          text: '#1E1E1E',           // Rich blackish-gray - legible and neutral
          secondaryText: '#616161',  // Muted gray for subtitles/hints
          info: '#0288D1',           // Calm cyan for informative actions
          warning: '#F57C00',        // Balanced orange for warnings
        },
      },
    },
  },
  defaults: {
    VCard: {
      // density: 'compact',
      // variant: 'outlined',
    },
    VTextField: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
    VTextarea: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
    VSelect: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
    VCombobox: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
    VAutocomplete: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
    VCheckbox: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
      color: 'primary',
    },
    VFileInput: {
      density: 'comfortable',
      hideDetails: 'auto',
      variant: 'outlined',
    },
  },
})

export default vuetify
