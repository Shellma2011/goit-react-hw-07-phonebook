import styled from 'styled-components';

const ContactItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* flex-wrap: wrap; */

  width: 240px;
  margin: 5px auto;

  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  /* box-shadow: -1px 15px 30px -12px black; */

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;

  &:hover,
  &:focus {
    box-shadow: -1px 15px 30px -12px black;
  }
`;

const ContactName = styled.p`
  /* margin-left: 4px; */
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;

  font-weight: bold;
`;

const ContactInfoStyled = styled.p`
  /* margin-left: 4px; */
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ContactButtonContainer = styled.div`
  width: 100%;
  display: flex;
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

export {
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
  ContactButtonContainer,
  ContactName,
};
