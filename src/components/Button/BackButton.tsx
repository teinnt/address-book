import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Image } from '@chakra-ui/react'

import { icons } from '../../utils'

const BackButton = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <Button
      onClick={goBack}
      variant="unstyled"
      _hover={{
        opacity: '0.5',
      }}
    >
      <Image h="60%" src={icons.goBack} alt="Item" />
    </Button>
  )
}

export default BackButton
