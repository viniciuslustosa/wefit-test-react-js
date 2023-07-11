import * as React from 'react';

interface Props {
  title: string,
  color?: string,
  size: number,
  bold?: boolean,
  align?: 'start' | 'center' | 'end'
}

const Text: React.FC<Props> = ({ title, size, bold, align, color }) => {

  return (
    <span style={{
      fontSize: `${size}px`,
      fontWeight: `${bold ? 'bold' : 'normal'}`,
      color: `${color ? color : 'black'}`,
      textAlign: align
    }}>
      { title }
    </span>
  );
}
export default Text;