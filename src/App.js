// import {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
// } from 'redux/contacts/contacts-slice';
import Section from './components/Section';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
// import { SpinnerTailSpin } from './components/Spinner/Spinner';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        {/* {isFetching && <SpinnerTailSpin />} */}
        <ContactForm />
        <Container title="Contacts">
          <Filter />
          {/* {data && ( */}
          <ContactList
          // contacts={data}
          // onDelete={deleteContact}
          // deleting={isDeleting}
          />
          {/* )} */}
        </Container>
      </Section>
    </div>
  );
};

export default App;
