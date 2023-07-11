import * as React from 'react';

interface Props {
  title: string,
  size: number,
  bold?: boolean,
  align?: 'start' | 'center' | 'end'
}

const Text: React.FC<Props> = ({ title, size, bold, align }) => {

  return (
    <span style={{
      fontSize: `${size}px`,
      fontWeight: `${bold ? 'bold' : 'normal'}`,
      textAlign: align
    }}>
      { title }
    </span>
  );
}
export default Text;