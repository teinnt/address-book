import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Flex, Text } from '@chakra-ui/react'

import { icons } from '../../utils'

interface NewContactButtonProps {
  children: string
}

const NewContactButton = ({ children }: NewContactButtonProps) => {
  const history = useHistory()

  const goToPage = () => {
    history.push('new-contact')
  }

  return (
    <Button
      mb="4"
      p="unset"
      onClick={goToPage}
      variant="ghost"
      _hover={{
        opacity: '0.7',
      }}
    >
      <Flex w="100%" alignItems="center" gridGap="4">
        <Avatar src={icons.plus} bgColor="white" />
        <Text h="fit-content" color="#495162" fontWeight="light">
          {children}
        </Text>
      </Flex>
    </Button>
  )
}

export default NewContactButton
