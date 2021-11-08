const ADDRESS_BOOK = 'book'

export interface AddressBook {
  name: string
  address: string
}

const saveAllContacts = (contacts: AddressBook[]) => {
  localStorage.setItem(ADDRESS_BOOK, JSON.stringify(contacts))
  return contacts
}

const getContacts = () => {
  const contactString = localStorage.getItem(ADDRESS_BOOK)
  if (!contactString) {
    return null
  }

  return JSON.parse(contactString)
}

const addContact = (newContact: AddressBook) => {
  const contacts = getContacts()

  if (contacts && !isAlreadyExist(contacts, newContact)) {
    contacts.push(newContact)
    sortContacts(contacts)

    saveAllContacts(contacts)
    return ''
  }

  return 'Contact name already exists!'
}

// HELPERS

const isAlreadyExist = (contacts: AddressBook[], newContact: AddressBook) =>
  contacts.some((contact) => contact.name === newContact.name)

const sortContacts = (contacts: AddressBook[]) =>
  contacts.sort((a: AddressBook, b: AddressBook) => (a.name > b.name ? 1 : -1))

export { saveAllContacts, getContacts, addContact }
