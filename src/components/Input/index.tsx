import * as React from 'react';
import { InputElement } from './style';

interface Props {
  value?: number,
}

const Input: React.FC<Props> = ({ value }) => {
  return (
    <InputElement value={value}>
    </InputElement>
  );
}
export default Input;