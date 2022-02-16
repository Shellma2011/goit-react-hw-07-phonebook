import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contacts-slice';
import Section from './components/Section';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { SpinnerTailSpin } from './components/Spinner/Spinner';

// import { ContactPage } from 'components/contactsPage';

export const App = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  console.log('data', data);

  return (
    <div>
      <Section title="Phonebook">
        {isFetching && <SpinnerTailSpin />}
        <ContactForm />
        <Container title="Contacts">
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
//   return (
//     <div>
//       <ContactPage />
//       {/* <Section title="Phonebook">
//         <ContactForm />
//         <Container title="Contacts">
//           <Filter />
//           <ContactList />
//         </Container>
//       </Section> */}
//     </div>
//   );
// }

export default App;
