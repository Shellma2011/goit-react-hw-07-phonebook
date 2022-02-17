import styled from 'styled-components';

const FilterLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 280px;
  margin: 0 auto;

  padding: 12px 16px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;

  &:hover,
  &:focus {
    box-shadow: -1px 15px 30px -12px black;
  }
`;

const FilterInput = styled.input`
  padding: 4px 12px;
  width: 240px;
  margin-top: 5px;
  font: inherit;
  line-height: 12px;
  letter-spacing: 0.01em;
`;

export { FilterLabel, FilterInput };
