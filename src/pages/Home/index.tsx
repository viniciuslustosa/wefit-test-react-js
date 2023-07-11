import React, { useEffect, useState } from 'react';
import ProductService from '../../services/auth';
import Grid from '@mui/material/Unstable_Grid2';
import './style.css';
import { Product } from '../../@types/cart';
import ProductCard from '../../components/ProductCard';

export const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>()

    const getMovies = async () => {
        const data = await ProductService.findAll();
        console.log('AQUI PEGOU', data)
        
        setProducts(data);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                { products && products.map(product => {
                    return (
                        <Grid xs={4} key={product.id}>
                            <div>
                                <ProductCard product={product} />
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
            
        </React.Fragment>
    );
}

export default Home;
