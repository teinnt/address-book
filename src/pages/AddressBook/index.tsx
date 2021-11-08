import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Box, Button, Flex, Grid, Text } from '@chakra-ui/react'

import { addresses } from '../../utils'
import useMetaMask from '../../hooks/useMetaMask'
import Container from '../../components/Container'
import { NewContactButton, RoundButton } from '../../components'

interface AddressBookProps {}

const AddressBook: React.FC<AddressBookProps> = () => {
  const { userAccount, disconnectMetaMask } = useMetaMask()
  const history = useHistory()

  const handleDisconnect = async () => {
    await disconnectMetaMask()
    history.push('/')
  }

  const renderAddresses = () =>
    addresses.map((address) => (
      <Button h="fit-content" variant="unstyled" fontWeight="light" mb="4">
        <Flex alignItems="center" gridGap="4">
          <Avatar name={address.name} color="white" bgColor="#8A96AA" />
          <Text width="fit-content" color="#495162">
            {address.name}
          </Text>
        </Flex>
      </Button>
    ))

  return (
    <Container title="Address Book">
      <Grid h="200px" minChildWidth="100%" minH="100vh">
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
