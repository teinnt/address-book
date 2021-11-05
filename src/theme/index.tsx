import React from 'react'
import { ChakraProvider, Container, extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: 'Rawline',
  body: 'Rawline',
}

const theme = extendTheme({ config, fonts })

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">{children}</Container>
    </ChakraProvider>
  )
}

export default ThemeProvider
