export interface IProduct {
    code: string;
    name: string;
    quantity: number;
    price: {
        base: number;
    };
    options: {
        volume: string;
        image: string;
    }
}