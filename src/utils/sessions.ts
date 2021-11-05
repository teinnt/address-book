const ADDRESS_BOOK = 'book'

interface AddressBook {
  name: string
  address: string
}

const saveAddressBook = (contacts: AddressBook[]) =>
  localStorage.setItem(ADDRESS_BOOK, JSON.stringify(Array.from(contacts.entries())))

const addContact = (newContact: AddressBook) => {
  const contactString = localStorage.get(ADDRESS_BOOK)

  const contacts = JSON.parse(contactString)

  console.log(contactString)
  console.log(contacts)
}

export { saveAddressBook, addContact }
