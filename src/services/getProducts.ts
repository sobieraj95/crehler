import { api } from '@/api/axios';
import { REST_URL, DEFAULT_LIST_BY_CATEGORY_ID } from '@/config/index';
import { IProduct } from '@/types/types';

const productsMap = (data: IProduct[]) => data?.map((el: any) => ({
    name: el.translated.name,
    description: el.translated.description,
    price: el.calculatedPrice.unitPrice,
    categoryId: el.categoryIds[0],
})
);

const searchProducts = async (order: string, searchValue: string = '') => {
    const url = `${REST_URL}search?order=price-${order}`;

    const body = {
        search: searchValue,
    }

    try {
        const data: any = await api(url, body);
        return productsMap(data.elements as IProduct[]);
    } catch (error) {
        console.log(error);
    }
};

const productListning = async (order: string = '') => {
    const url = `${REST_URL}product-listing/${DEFAULT_LIST_BY_CATEGORY_ID}?order=price-${order}`;
    try {
        const data: any = await api(url);
        return productsMap(data.elements as IProduct[]);
    } catch (error) {
        console.log(error);
    }
};
export { searchProducts, productListning }