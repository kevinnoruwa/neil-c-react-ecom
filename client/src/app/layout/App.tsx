


import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './Header'
import Catalog from '../../features/catalog/Catolog'

import React from 'react'

export default function App() {
const [darkMode, setDarkMode] = React.useState(false)
const paletteType = darkMode ? 'dark' : 'light';
const theme = createTheme({
  palette:{
    mode: paletteType,
    background: {
      default: paletteType === 'light'? "#eaeaea" : "#121212"
    }
  }
})


const handleThemeChange = () => {
  setDarkMode(prevState => !prevState)
}

  return (
    <ThemeProvider theme={theme}>
     <CssBaseline/>
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode}/>
          <Container>
            <Catalog/> 
          </Container>
         

      
    </ThemeProvider>
  )
}

