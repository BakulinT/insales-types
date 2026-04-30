/**
 * @interface AjaxAPI
 * Модуль для работы с API магазина
 * @see https://github.com/liquid-hub/insales-common-js-v2-api/blob/master/ajaxAPI.md
 */

import Product from "../entity/product";

interface Message {
    from: string;
    name: string;
    subject: string;
    content: string;
    phone: string;
}

interface ResponseGetClient {
    status: "ok" | "error";
    client: any | null;
    message?: string;
    url?: string;
}

interface Shop {
    client: {
        get: () => ResponseGetClient
    };
    review: (review: any, articleUrl: string) => any;
    comment: (comment: any, articleUrl: string) => any;
    message: (message: Message) => any;
}

interface Cart {
    get: (items: any, options: any) => any;
    add: () => any;
    remove: (variant_id : number) => any;
    update: (items: any, options: any) => any;
}

interface GetProduct {
    get: () => Product;
    getList: () => Product[] | Record<string, never>;
}

export default interface AjaxAPI {
    cart: Cart;
    shop: Shop;
    product: GetProduct;
    
    collection: {
        get: (handle: string, filter: any, pager: any) => any;
    };
    checkout: {
        order: (client: any, order: any) => any;
    };
}