import React from 'react'
import { Button as ChakraButton, Text, useBreakpointValue } from '@chakra-ui/react'

interface ButtonProps {
  cb: (obj: any) => any
  bgColor?: 'orange.700' | 'blue.400' | 'white'
  children: string
}

const Button = ({ bgColor, cb, children }: ButtonProps) => {
  const height = useBreakpointValue(['2.5em', '3.5em', '4em', '3em'])

  const textColor = bgColor === 'white' ? 'orange.400' : 'white'

  return (
    <ChakraButton
      p="2"
      height={height}
      borderRadius="3xl"
      w="100%"
      bgColor="#F15A29"
      color={textColor}
      onClick={cb}
      _hover={{
        background: 'gray.100',
        color: 'gray.400',
      }}
    >
      <Text fontSize={['1em', '1.5em', '2em', '1em']} fontWeight="light">
        {children}
      </Text>
    </ChakraButton>
  )
}

export default Button

Button.defaultProps = {
  bgColor: 'orange.400',
}
