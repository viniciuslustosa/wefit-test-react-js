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

    static async filter(searchText: string | null) {
        try {
            const { data: products } = await api.get<Product[]>(
                'products'
            );
            const regex = new RegExp((searchText || "").toLowerCase());
            const data = products.filter(item => item.title.toLowerCase().match(regex));
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}