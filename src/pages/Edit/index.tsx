import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Flex, Grid, Text } from '@chakra-ui/react'

import { addresses } from '../../utils'
import useMetaMask from '../../hooks/useMetaMask'
import Container from '../../components/Container'
import { NewContactButton, RoundButton } from '../../components'

interface EditProps {}

const Edit: React.FC<EditProps> = () => {
  const { userAccount, disconnectMetaMask } = useMetaMask()
  const history = useHistory()

  const handleDisconnect = async () => {
    await disconnectMetaMask()
    history.push('/')
  }

  const renderAddresses = () =>
    addresses.map((address) => (
      <Button>
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
      <Grid h="200px" minchildwidth="100%" gap="4">
        <NewContactButton>New Contact</NewContactButton>

        {renderAddresses()}

        <RoundButton bgColor="blue" onClick={handleDisconnect}>
          Disconnect
        </RoundButton>
      </Grid>
    </Container>
  )
}

export default Edit
