import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Text, Button } from '@chakra-ui/react'

import BackButton from '../Button/BackButton'

interface HeaderProps {
  title: string
  cb?: (obj: any) => any
}

const Header = ({ title, cb }: HeaderProps) => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <Grid p="6" paddingInline="2" templateColumns="1fr 3fr 1fr" gap="2">
      <BackButton cb={cb} />
      <Text textAlign="center" alignSelf="center">
        {title}
      </Text>
      <Button fontSize="0.7em" onClick={goBack} variant="unstyled" textColor="#4D6AA7">
        Edit
      </Button>
    </Grid>
  )
}

export default Header

Header.defaultProps = {
  cb: () => {},
}
