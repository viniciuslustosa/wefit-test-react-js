export interface Product {
    id: string,
    title: string,
    quantity?: number,
    price: number,
    image: string,
}

export interface Cart {
    products: Product[],
    quantity?: number,
    totalPrice?: number,
}