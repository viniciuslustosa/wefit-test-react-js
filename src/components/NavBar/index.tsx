import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../Logo';
import Icon from '../../icons';
import { useCart } from '../../contexts/CartContext';
import { ContentCart } from './style';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const { cart } = useCart()

  return (
    <AppBar sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 1,
    }} position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }} disableGutters>
          <Logo />
          <ContentCart onClick={() => navigate("cart")}>
            <div>
              <span>
                Meu Carrinho
              </span>
              <span>
                { cart?.quantity } Itens
              </span>
            </div>
            <Icon size={32} name="Cart" color='white'></Icon>
          </ContentCart>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;