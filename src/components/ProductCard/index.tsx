import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { Product } from '../../@types/cart';
import Button from '../Button';
import Text from '../Text';
import Icon from '../../icons';
import { useCart } from '../../contexts/CartContext';
import { AmountFormat } from '../../helpers/AmontHelper';

interface Props {
    product: Product,
    quantitySelected: number,
}

const ProductCard: React.FC<Props> = ({ product, quantitySelected }) => {
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
          alt={product.title}
        />
        <Text
          title={product.title}
          size={16}
          align="center"
          bold
        />
        <Text
          title={AmountFormat(product.price)}
          size={16}
          align="center"
          bold
        />
        <Button
          title={quantitySelected > 0 ? quantitySelected + " ITEM ADICIONADO" : quantitySelected + " ADICIONAR AO CARRINHO"}
          color={quantitySelected > 0 ? 'success' : 'primary'}
          onClick={handleAddToCart}
          icon="CartAdd"></Button>
    </Card>
  );
}

export default ProductCard;
