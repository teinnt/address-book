import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Flex, Grid, Text } from '@chakra-ui/react'

import useMetaMask from '../../hooks/useMetaMask'
import Container from '../../components/Container'
import { NewContactButton, RoundButton } from '../../components'
import useContacts from '../../hooks/useContacts'

const AddressBook = () => {
  const { disconnectMetaMask } = useMetaMask()
  const { contacts } = useContacts()

  const history = useHistory()

  const handleDisconnect = async () => {
    await disconnectMetaMask()
    history.push('/')
  }

  const renderAddresses = () =>
    contacts?.map((contact) => (
      <Button key={contact.name} h="fit-content" variant="unstyled" fontWeight="light" mb="4">
        <Flex alignItems="center" gridGap="4">
          <Avatar name={contact.name} color="white" bgColor="#8A96AA" />
          <Text width="fit-content" color="#495162">
            {contact.name}
          </Text>
        </Flex>
      </Button>
    ))

  return (
    <Container title="Address Book">
      <Grid h="200px" minchildwidth="100%" minH="100vh">
        <NewContactButton>New Contact</NewContactButton>

        {renderAddresses()}

        <Flex mt="4">
          <RoundButton bgColor="blue" onClick={handleDisconnect}>
            Disconnect
          </RoundButton>
        </Flex>
      </Grid>
    </Container>
  )
}

export default AddressBook
