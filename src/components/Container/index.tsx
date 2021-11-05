import React from 'react'
import { Box } from '@chakra-ui/react'

import Header from './Header'

interface ContainerProps {
  title: string
  cb?: (obj: any) => any
  children: string
}

const Container = ({ title, cb, children }: ContainerProps) => (
  <>
    <Header title={title} cb={cb} />
    <Box>{children}</Box>
  </>
)

export default Container

Container.defaultProps = {
  cb: () => {},
}
