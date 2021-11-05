import React from 'react'
import { Button, Image } from '@chakra-ui/react'
import { icons } from '../../utils'

interface BackButtonProps {
  cb?: (obj: any) => any
}

const BackButton = ({ cb }: BackButtonProps) => (
  <Button
    onClick={cb}
    variant="unstyled"
    _hover={{
      opacity: '0.5',
    }}
  >
    <Image h="60%" src={icons.goBack} alt="Item" />
  </Button>
)

export default BackButton

BackButton.defaultProps = {
  cb: () => {},
}
