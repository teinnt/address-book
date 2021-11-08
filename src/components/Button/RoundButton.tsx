import React from 'react'
import { Button as ChakraButton, Text, useBreakpointValue } from '@chakra-ui/react'

interface ButtonProps {
  bgColor?: 'orange' | 'blue' | 'white'
  onClick: (obj: any, ...rest: any) => any
  children: string
}

const getBgColor = (bgColor: string | undefined): string => {
  let bgColorValue
  switch (bgColor) {
    case 'orange':
      bgColorValue = '#F15A29'
      break
    case 'blue':
      bgColorValue = '#4D6AA7'
      break
    default:
      bgColorValue = '#FFFFFF'
      break
  }

  return bgColorValue
}

const Button = ({ bgColor, onClick, children }: ButtonProps) => {
  const height = useBreakpointValue(['2.5em', '3.5em', '4em', '3em'])
  const fontSize = useBreakpointValue(['1em', '1.5em', '2em', '1em'])
  const textColor = bgColor === 'white' ? 'orange' : 'white'
  const bgColorValue = getBgColor(bgColor)

  return (
    <ChakraButton
      p="2"
      height={height}
      borderRadius="3xl"
      w="100%"
      bgColor={bgColorValue}
      color={textColor}
      onClick={onClick}
      _hover={{
        background: 'gray.300',
        color: 'gray.600',
      }}
    >
      <Text fontSize={fontSize} fontWeight="light">
        {children}
      </Text>
    </ChakraButton>
  )
}

export default Button

Button.defaultProps = {
  bgColor: 'orange',
}
