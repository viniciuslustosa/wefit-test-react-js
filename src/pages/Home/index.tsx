import React, { useEffect, useState } from 'react';
import ProductService from '../../services/products';
import Grid from '@mui/material/Unstable_Grid2';
import { Product } from '../../@types/cart';
import ProductCard from '../../components/ProductCard';
import Text from '../../components/Text';
import { useCart } from '../../contexts/CartContext';
import { ContentSearching, LoadingContent, SearchContent } from './style';
import Icon from '../../icons';
import { CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../helpers/useQuery';

export const Home: React.FC = () => {
    const { cart } = useCart();
    const query = useQuery();
    const [products, setProducts] = useState<Product[]>();
    const [searching, setSearching] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string | null>(query.get('query') || "");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();


    const getMovies = async () => {
        try {
            setLoading(true);
            const data = await ProductService.findAll();
            setProducts(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(searchText !== "") {
            handleSearch()
        } else {
            getMovies()
        }
    }, [])

    const handleSearch = async () => {
        try {
            if(searchText !== "") {
                setLoading(true);
                setSearching(true);
                const data = await ProductService.filter(searchText);
                setProducts(data);
                if(data?.length === 0) {
                    navigate("/noproduct");
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleCleanSearch = () => {
        setSearching(false);
        setSearchText("");
        getMovies();
    }

    useEffect(() => {
      }, [navigate, searchText]);

    return (
        <React.Fragment>
                <SearchContent>
                    <input
                        value={searchText || ""}
                        onChange={(e) => {
                            const searchParams = new URLSearchParams(location.search);
                            searchParams.set('query', e.target.value);
                            navigate(`?${searchParams.toString()}`);
                            setSearchText(e.target.value)
                            setSearching(false);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                        placeholder="Buscar filme pelo nome"
                        type="text"
                    />

                    { !searching && (<Icon name="Search" size={24} color="#CCCCCC" onClick={() => handleSearch()} />)}
                    { searching && (<Icon name="Cancel" size={24} color="#CCCCCC" onClick={() => handleCleanSearch()} />)}
                </SearchContent>
            { (products && searching && !loading) && (
                <React.Fragment>
                    <ContentSearching>
                        <Text
                            title={`Exibindo resultados para "${searchText}"`}
                            color="white"
                            size={18}
                        />
                        <Text
                            title={`
                                ${products?.length}
                                ${products?.length > 1 ? 'resultados' : 'resultado'}
                                ${products?.length > 1 ? 'encontrados' : 'encontrado'}
                            `}
                            color="white"
                            size={18}
                            bold
                        />
                    </ContentSearching>
                </React.Fragment>
            )}
            { !loading && (
                <Grid container spacing={2}>
                    { products && products.map(product => {
                        return (
                            <Grid xs={12} sm={6} md={4} key={product.id}>
                                <div>
                                    <ProductCard
                                        product={product}
                                        quantitySelected={cart?.products?.find(item => item.id === product.id)?.quantity || 0}
                                    />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            )}
            { loading && (
                <LoadingContent>
                    <CircularProgress color="secondary" />
                </LoadingContent>
            )}
        </React.Fragment>
    );
}

export default Home;
