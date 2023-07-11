import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../Logo';
import Icon from '../../icons';
import { useCart } from '../../contexts/CartContext';

function ResponsiveAppBar() {
  const { cart } = useCart()

  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 1 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <div>
            <span>
              { cart?.length } Itens
            </span>
            <Icon size={32} name="Cart" color='white'></Icon>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;