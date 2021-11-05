import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Center, Image, Text } from '@chakra-ui/react'

import { icons } from '../../utils'
import { Button } from '../../components'
import useMetaMask from '../../hooks/useMetaMask'

function LandingPage(): JSX.Element {
  const { userAccount, loadUserAccount } = useMetaMask()

  const history = useHistory()

  useEffect(() => {
    if (userAccount) {
      history.push('address-book')
    }
  }, [history, userAccount])

  return (
    <Center margin="auto" maxWidth={['100%', '80%', '90%', '60%']} flexDirection="column" alignItems="center" h="100vh">
      <Image mb="6" w={['50%', '40%', '60%', '30%', '10%']} src={icons.metamask} alt="Item" />

      <Text fontWeight="bold" mb="4" fontSize={['1.5em', '2em', '3em', '1em']} color="#646464" textAlign="center">
        Crypto address book
      </Text>

      <Text mb="10" fontSize={['0.8em', '1.5em', '2em', '1em']} textAlign="center">
        The easiest and quickest way to mange and pay your contacts. Connect your wallet to begin.
      </Text>

      <Button cb={loadUserAccount}>Connect Wallet</Button>
    </Center>
  )
}

export default LandingPage
