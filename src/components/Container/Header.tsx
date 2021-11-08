import React from 'react'
import { Grid, Text, Button } from '@chakra-ui/react'

import BackButton from '../Button/BackButton'

interface HeaderProps {
  title: string
  leftCb?: (obj: any) => any
}

const Header = ({ title, leftCb }: HeaderProps) => (
  <Grid p="6" paddingInline="2" templateColumns="1fr 3fr 1fr" gap="2">
    <BackButton />
    <Text color="#495162" textAlign="center" alignSelf="center" fontSize={['1em', '1.2em', '1.5em']}>
      {title}
    </Text>
    {leftCb ? (
      <Button fontSize="0.7em" onClick={leftCb} variant="unstyled" textColor="#4D6AA7">
        Edit
      </Button>
    ) : null}
  </Grid>
)

export default Header

Header.defaultProps = {
  leftCb: () => {},
}
