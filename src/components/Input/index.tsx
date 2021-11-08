import React, { InputHTMLAttributes } from 'react'
import { Grid, Input as ChakraInput } from '@chakra-ui/react'

const Input = ({ placeholder, value, onChange }: InputHTMLAttributes<HTMLInputElement>) => (
  <Grid>
    <ChakraInput
      borderRadius={20}
      variant="filled"
      placeholder={placeholder}
      _placeholder={{ color: '#495162' }}
      bgColor="#F6F6F6"
      color="#495162"
      value={value}
      onChange={onChange}
    />
  </Grid>
)

export default Input
