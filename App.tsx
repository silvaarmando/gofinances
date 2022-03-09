import React from 'react'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading'

import {
  ThemeProvider
} from 'styled-components'

import theme from './src/global/styles/theme'

import {
  Dashboard
} from './src/pages/Dashboard/'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider
      theme={theme}
    >
      <Dashboard />
    </ThemeProvider>
  )
}
