import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Stack, Text } from '@chakra-ui/react'

import { sessions } from '../../utils'
import { Input, RoundButton } from '../../components'
import Container from '../../components/Container'

interface EditProps {}

const Edit: React.FC<EditProps> = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [nameError, setNameError] = useState('')
  const [addressError, setAddressError] = useState('')

  const history = useHistory()

  const addNewAddress = () => {
    const newAddress = {
      name,
      address,
    }

    const error = sessions.addContact(newAddress)

    if (error) {
      setAddressError(error)
    } else {
      history.goBack()
    }
  }

  return (
    <Container title="Edit">
      <Grid h="200px" minchildwidth="100%">
        <Stack m="unset" mt="6" mb="2em" spacing={6}>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && (
            <Text mt="1" ml="4" color="#EE3D52" fontSize={['0.7em', '0.8em']}>
              {nameError}
            </Text>
          )}

          <Input placeholder="Ethereum address" value={address} onChange={(e) => setAddress(e.target.value)} />
          {addressError && (
            <Text mt="1" ml="4" color="#EE3D52" fontSize={['0.7em', '0.8em']}>
              {addressError}
            </Text>
          )}
        </Stack>
        <RoundButton onClick={addNewAddress}>Save</RoundButton>
      </Grid>
    </Container>
  )
}

export default Edit
