import { ContactForm } from 'components/ContactForm/ContactForm';
import { AppContainer, ContactsContainer, Title } from './Contacts.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Phonebook = () => {
  return (
    <AppContainer>
      <ContactForm />
      <ContactsContainer>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </ContactsContainer>
    </AppContainer>
  );
};

export default Phonebook;
