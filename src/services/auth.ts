import { Product } from "../@types/cart";
import api from "../config/api";

export default class ProductService {
    static async findAll() {
        try {
            const { data: products } = await api.get<Product[]>(
                'products'
            );
                
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}