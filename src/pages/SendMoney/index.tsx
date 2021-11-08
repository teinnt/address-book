import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Center, Grid, Text } from '@chakra-ui/react'

import Container from '../../components/Container'
import { Input, RoundButton } from '../../components'
import { AddressBook } from '../../utils/sessions'
import { routerUtils, sessions, web3 } from '../../utils'

const SendMoney = () => {
  const [contact, setContact] = useState<AddressBook>()
  const [amount, setAmount] = useState('')
  const [fee, setFee] = useState('')
  const [resultMessage, setResultMessage] = useState('')
  const [isSuccess, setSuccess] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const result = sessions.getContactDetail(routerUtils.getIdFromUrl())
    if (!result) {
      history.push('/address-book')
    } else {
      setContact(result)
    }

    setFee('Tx fee: 0.00021 ETH $0.53')
  }, [history])

  const goToPage = () => {
    history.push(`/edit/${contact?.name}`)
  }

  const handleTransferMoney = async () => {
    if (isNaN(Number(amount))) {
      setResultMessage('Please enter number only.')
    } else {
      const message = await web3.sendTransaction(contact?.address || '', Number(amount))

      if (message) {
        setResultMessage(message)
      } else {
        setSuccess(true)
        setResultMessage('Transaction completed!')
      }
    }
  }

  return (
    <Container title={`Send to ${contact?.name}`} cb={goToPage} centerContent>
      <Center>
        <Avatar m="6" size="xl" name={contact?.name} bgColor="#8A96AA" />
      </Center>
      <Text mb="6" fontSize="0.8em" textAlign="center" color="#4D6AA7" flexWrap="wrap" wordBreak="break-word">
        {contact?.address}
      </Text>

      <Grid h="200px" minchildwidth="100%">
        <Input placeholder="0 ETH" value={amount} onChange={(e) => setAmount(e.target.value)} />
        {resultMessage && (
          <Text m="4" mt="1" color={isSuccess ? '#48BB78' : '#EE3D52'} fontSize={['0.7em', '0.8em']}>
            {resultMessage}
          </Text>
        )}
        <Text textAlign="center" mb="6" ml="4" color="#4D6AA7" fontSize={['0.7em', '0.8em']}>
          {fee}
        </Text>

        <RoundButton onClick={handleTransferMoney}>Send</RoundButton>
      </Grid>
    </Container>
  )
}

export default SendMoney
