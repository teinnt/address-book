import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Flex, Grid, Text } from '@chakra-ui/react'

import Container from '../../components/Container'
import useContacts from '../../hooks/useContacts'
import { NewContactButton, RoundButton } from '../../components'
import { AddressBook as AddressBookProps } from '../../utils/sessions'
import { metamask } from '../../utils'

const AddressBook = () => {
  const { contacts } = useContacts()

  const history = useHistory()

  const handleDisconnect = async () => {
    await metamask.disconnectMetamask()
    history.push('/')
  }

  const goToPage = (contact: AddressBookProps) => {
    history.push(`/send/${contact.name}`)
  }

  const renderAddresses = () =>
    contacts?.map((contact) => (
      <Button
        onClick={() => goToPage(contact)}
        key={contact.name}
        h="fit-content"
        variant="unstyled"
        fontWeight="light"
        mb="4"
      >
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
