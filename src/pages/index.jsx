import React from 'react'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Projects from '../components/Projects';
import Members from '../components/Members';

let darkTheme = createTheme({
  palette: {
    type: "dark"
  }
});

darkTheme = responsiveFontSizes(darkTheme);
export default function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Members />
      <Projects />
    </ThemeProvider>
  )
}
