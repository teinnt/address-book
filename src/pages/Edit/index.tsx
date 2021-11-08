import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@chakra-ui/react'

import { routerUtils, sessions } from '../../utils'
import Container from '../../components/Container'
import { NewContactButton } from '../../components'
import { AddressBook } from '../../utils/sessions'

interface EditProps {}

const Edit: React.FC<EditProps> = () => {
  const [contact, setContact] = useState<AddressBook>()

  const history = useHistory()

  useEffect(() => {
    const result = sessions.getContactDetail(routerUtils.getIdFromUrl())
    if (!result) {
      history.push('/address-book')
    } else {
      setContact(result)
    }
  }, [history])

  return (
    <Container title={`Send to ${contact?.name}`}>
      <Grid h="200px" minchildwidth="100%" gap="4">
        <NewContactButton>New Contact</NewContactButton>
      </Grid>
    </Container>
  )
}

export default Edit
