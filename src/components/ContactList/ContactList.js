// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contacts-actions';
import { ContactListStyled } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
// import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ContactListStyled>
  );
};

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ContactList;
