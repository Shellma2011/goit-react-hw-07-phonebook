import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contacts-slice';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Section from './Section';
import Container from './Container';

import Filter from './Filter';
import { SpinnerTailSpin } from './Spinner/Spinner';

export const ContactPage = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <div>
      <Section title="Phonebook">
        <h1>ContactPage</h1>
        {isFetching && <SpinnerTailSpin />}
        <Container title="Contacts">
          <ContactForm />

          <Filter />
          {data && (
            <ContactList
              contacts={data}
              onDelete={deleteContact}
              deleting={isDeleting}
            />
          )}
        </Container>
      </Section>
    </div>
  );
};
