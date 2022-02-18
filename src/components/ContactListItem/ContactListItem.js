import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import {
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
  ContactButtonContainer,
  ContactName,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ContactItemStyled>
      <ContactName>{name + ':'}</ContactName>
      <ContactInfoStyled>{number}</ContactInfoStyled>
      <ContactButtonContainer>
        <ContactButton
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </ContactButton>
      </ContactButtonContainer>
    </ContactItemStyled>
  );
};

export default ContactListItem;
