import styled from 'styled-components';

const ContactListStyled = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 340px;
  margin: 20px auto;

  padding: 12px 16px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const ContactItemStyled = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 300px;
  margin: 5px auto;

  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const ContactInfoStyled = styled.p`
  margin-left: 4px;
`;

const ContactButton = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  width: auto;
  margin-left: auto;
  border-radius: 4px;
  padding: 6px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export { ContactListStyled, ContactItemStyled, ContactInfoStyled, ContactButton };
