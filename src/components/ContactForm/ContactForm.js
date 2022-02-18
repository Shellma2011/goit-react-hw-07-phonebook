import React, { useState } from 'react';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contacts-slice';
import { SpinnerAudio } from '../Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      data.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      toast.error(`${name} is already in contacts!`);
    } else {
      await createContact({ name, number });
      console.log(name);
    }

    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <Toaster position="top-center" reverseOrder={false} />
      <PhonebookLabel>
        Name
        <PhonebookInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel>
        Number
        <PhonebookInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookButton type="submit" disabled={isLoading}>
        {isLoading && <SpinnerAudio />}
        Add contact
      </PhonebookButton>
    </PhonebookForm>
  );
}
