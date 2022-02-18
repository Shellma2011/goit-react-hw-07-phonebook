import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';
import ContactListItem from '../ContactListItem';
import { ContactListStyled } from './ContactList.styled';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { SpinnerMutatingDots } from '../Spinner/Spinner';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(getFilter).toLowerCase();
  const getFiltredContacts = contacts =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  const filtred = data ? getFiltredContacts(data) : [];

  return (
    <>
      {isFetching && <SpinnerMutatingDots />}
      <ContactListStyled>
        {filtred &&
          filtred.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </ContactListStyled>
    </>
  );
};

export default ContactList;
