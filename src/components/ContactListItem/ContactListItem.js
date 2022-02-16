import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import {
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ContactItemStyled>
      <ContactInfoStyled>{name + ':'}</ContactInfoStyled>
      <ContactInfoStyled>{number}</ContactInfoStyled>
      <ContactButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </ContactButton>
    </ContactItemStyled>
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

export default ContactListItem;
