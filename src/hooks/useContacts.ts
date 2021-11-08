import { useEffect, useState } from 'react'
import { addresses, sessions } from '../utils'
import { AddressBook } from '../utils/sessions'

const useContacts = () => {
  const [contacts, setContacts] = useState<AddressBook[] | null>()

  const updateContact = (allContacts: AddressBook[]) => {
    sessions.saveAllContacts(allContacts)
  }

  useEffect(() => {
    if (!sessions.getContacts()) {
      updateContact(addresses)
    }

    setContacts(sessions.getContacts() || null)
  }, [])

  return { contacts }
}

export default useContacts
