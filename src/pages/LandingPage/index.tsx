import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Center, Image, Text } from '@chakra-ui/react'

import { icons } from '../../utils'
import { RoundButton } from '../../components'
import useMetaMask from '../../hooks/useMetaMask'
import { containerWidth, imageWidth, titleWidth, descriptionWidth } from './styles'

function LandingPage(): JSX.Element {
  const { userAccount, connectMetaMask } = useMetaMask()

  const history = useHistory()

  useEffect(() => {
    if (userAccount) {
      history.push('address-book')
    }
  }, [history, userAccount])

  return (
    <Center margin="auto" maxWidth={containerWidth} flexDirection="column" alignItems="center" h="100vh">
      <Image mb="6" w={imageWidth} src={icons.metamask} alt="Metamask" />

      <Text fontWeight="bold" mb="4" fontSize={titleWidth} color="#646464" textAlign="center">
        Crypto address book
      </Text>

      <Text mb="10" fontSize={descriptionWidth} textAlign="center">
        The easiest and quickest way to mange and pay your contacts. Connect your wallet to begin.
      </Text>

      <RoundButton onClick={connectMetaMask}>Connect Wallet</RoundButton>
    </Center>
  )
}

export default LandingPage
