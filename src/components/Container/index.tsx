import React from 'react'
import { Box, Container as ChakraContainer } from '@chakra-ui/react'

import Header from './Header'

interface ContainerProps {
  title: string
  cb?: (obj: any) => any
  children: React.ReactNode
}

const Container = ({ title, cb, children }: ContainerProps) => (
  <ChakraContainer width={['100vw', '100vw', '50vw']}>
    <Header title={title} leftCb={cb} />
    <Box mb="20">{children}</Box>
  </ChakraContainer>
)

export default Container

Container.defaultProps = {
  cb: null,
}
