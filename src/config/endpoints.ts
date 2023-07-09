'use client';

export const SITE_URL = process.env.BASE_API;

export const SUB_URL = process.env.SUB_API;

export const SERVER_LOGIN_ROUTE = `${SITE_URL}/login`;

//products

export const SERVER_GET_ALL_PRODUCT_ENDPOINT = `${SUB_URL}/products`
export const SERVER_ADD_PRODUCT_ENDPOINT = `${SUB_URL}/products`

//carts

export const SERVER_GET_ALL_CART_ENDPOINT = `${SUB_URL}/carts`
export const SERVER_ADD_CART_ENDPOINT = `${SUB_URL}/carts`

// client routes

export const LOGIN_ROUTE = '/';