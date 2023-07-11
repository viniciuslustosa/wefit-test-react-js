import * as React from 'react';
import { InputElement } from './style';

interface Props {
  change: () => void,
  value?: number,
}

const Input: React.FC<Props> = ({ value }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  return (
    <InputElement value={value} onChange={(event) => handleChange(event)}>
    </InputElement>
  );
}
export default Input;