import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { Product } from '../../@types/cart';
import Button from '../Button';
import Text from '../Text';
import Icon from '../../icons';
import { useCart } from '../../contexts/CartContext';

interface Props {
    product: Product,
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { AddToCart } = useCart()

  const handleAddToCart = () => {
    AddToCart(product)
  }

  return (
    <Card variant="outlined" sx={{
      padding: '10px',
      gap: '10px',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <CardMedia
          sx={{ width: '147px', margin: '0px auto'}}
          component="img"
          image={product.image}
          alt="Paella dish"
        />
        <Text
          title={product.title}
          size={16}
          align="center"
          bold
        />
        <Button
          title={"ADICIONAR AO CARRINHO" + product.quantity}
          onClick={handleAddToCart}
          icon="CartAdd"></Button>
        <Icon name="CartAdd" size={20} color="black" />
    </Card>
  );
}

export default ProductCard;
