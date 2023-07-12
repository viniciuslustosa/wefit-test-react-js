import { Card, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from '@mui/material';
import { useCart } from '../../contexts/CartContext';
import Icon from '../../icons';
import Input from '../../components/Input';
import Text from '../../components/Text';
import { FinishCart, ProductContent, RowItem } from './style';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { AmountFormat } from '../../helpers/AmontHelper';
import { useLayoutEffect } from 'react';

const Cart: React.FC = () => {
    const { cart, AddToCart, RemoveToCart, DeleteProduct, CleanCart} = useCart()
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const handleFinish = () => {
        CleanCart()
        navigate("/Purchase")
    }

    useLayoutEffect(() => {
        const delay = 500; // Tempo de atraso para evitar que saia da página mesmo com produtos (em milissegundos)

        const debounceTimer = setTimeout(() => {
            if(!cart?.products.length) {
                navigate("/noproduct")
            }
        }, delay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [cart])

    return (
        <Card variant="outlined" sx={{
            padding: '10px',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transition: all 0.5s ease-out;',
          }}>
            { !isSmallScreen && (<TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow sx={{ fontFamily: 'Open Sans'}}>
                        <TableCell>PRODUTO</TableCell>
                        <TableCell align="left">QTD</TableCell>
                        <TableCell align="left">SUBTOTAL</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cart?.products.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <RowItem>
                                    <div className="productImage">
                                        <img src={row.image} width="89" alt={row.title} />
                                    </div>
                                    <div className="productInfo">
                                        <div>
                                            <Text title={row.title} size={14} bold />
                                            <Text title={AmountFormat(row.price)} size={14} bold />
                                        </div>
                                    </div>
                                </RowItem>
                            </TableCell>
                            <TableCell align="left">
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <Icon
                                        onClick={() => RemoveToCart(row)}
                                        name="Remove"
                                        size={18}
                                        color="#009EDD"
                                    />
                                    <Input value={row.quantity} />
                                    <Icon
                                        onClick={() => AddToCart(row)}
                                        name="Add"
                                        size={18}
                                        color="#009EDD"
                                    />
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <Text title={AmountFormat(row.price * (row?.quantity || 1))} size={14} bold />
                            </TableCell>
                            <TableCell align="left">
                                <Icon onClick={() => DeleteProduct(row)} name="Bin" size={16} color="#009EDD"/>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            )}

            { isSmallScreen && (
                <div>
                    {cart?.products.map((row) => (
                        <ProductContent>
                            <div>
                                <img src={row.image} width="89" alt={row.title} />
                            </div>
                            <div>
                                <div className="productInfo">
                                    <Text title={row.title} size={14} bold />
                                    <Text title={AmountFormat(row.price)} size={14} bold />
                                    <Icon onClick={() => DeleteProduct(row)} name="Bin" size={16} color="#009EDD"/>
                                </div>
                                <div>
                                    <div className="quantityContent" style={{ display: 'flex', alignItems: 'center'}}>
                                        <Icon
                                            onClick={() => AddToCart(row)}
                                            name="Add"
                                            size={18}
                                            color="#009EDD"
                                        />
                                        <Input value={row.quantity} />
                                        <Icon
                                            onClick={() => RemoveToCart(row)}
                                            name="Remove"
                                            size={18}
                                            color="#009EDD"
                                        />
                                    </div>
                                    <div className='subtotalContent'>
                                        <Text title="SUBTOTAL" size={14} color='#999999' bold />
                                        <Text title={AmountFormat(row.price * (row?.quantity || 1))} size={14} bold />
                                    </div>
                                </div>
                            </div>
                        </ProductContent>
                    ))}
                </div>
            )}
            <Divider sx={{ borderColor: '#999999'}} variant='middle'></Divider>
            <FinishCart>
                <Grid container>
                    <Grid xs={12} md={6}>
                        <div className="priceContent">
                            <Text title="TOTAL" size={14} />
                            <Text 
                                title={AmountFormat(cart?.totalPrice || 0)}
                                size={24}
                                bold
                                />
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div className="buttonContent">
                            <Button title='FINALIZAR PEDIDO' onClick={() => handleFinish()} />
                        </div>
                    </Grid>
                </Grid>
            </FinishCart>
        </Card>
    );
}

export default Cart;
