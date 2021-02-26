import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

const Form = styled(Unform)`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 0.7rem 1.5rem;

  button {
    width: 100%;
  }
`;

export default Form;
