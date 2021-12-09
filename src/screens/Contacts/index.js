import React, {useEffect, useState} from 'react';

import {
  ContactName,
  ContactView,
  Container,
  ListContacts,
  Search,
  Separator,
} from './styles';

import contactsData from '../../assets/data/contacts.json';

const ContactsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactsData);

  useEffect(() => {
    const contactFiltered = contactsData.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(contactFiltered);
  }, [searchTerm]);

  return (
    <Container>
      <Search
        placeholder="Buscar contato"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <ListContacts
        data={filteredContacts}
        keyExtractor={item => item.user_id}
        renderItem={({item: contact}) => (
          <ContactView>
            <ContactName>{contact.user_display_name}</ContactName>
          </ContactView>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default ContactsScreen;
