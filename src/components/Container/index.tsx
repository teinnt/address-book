import React from 'react'
import { Box, Container as ChakraContainer } from '@chakra-ui/react'

import Header from './Header'

interface ContainerProps {
  title: string
  cb?: (obj: any) => any
  centerContent?: boolean
  children: React.ReactNode
}

const Container = ({ title, cb, children, centerContent }: ContainerProps) => (
  <ChakraContainer maxWidth={['95vw', '95vw', '52vw']} centerContent={centerContent}>
    <Header title={title} leftCb={cb} />
    <Box mb="20">{children}</Box>
  </ChakraContainer>
)

export default Container

Container.defaultProps = {
  cb: null,
  centerContent: false,
}
