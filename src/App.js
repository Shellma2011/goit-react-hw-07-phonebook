import Section from './components/Section';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
        <Container title="Contacts">
          <Filter />
          <ContactList />
        </Container>
      </Section>
    </div>
  );
};

export default App;
