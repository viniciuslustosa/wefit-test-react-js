import React from 'react';
import NavBar from '../NavBar';
import { Container } from '@mui/material';

interface Props {
    children: any,
}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <Container>
          <NavBar />
          { children }
        </Container>
    </div>
  );
}

export default Base;
