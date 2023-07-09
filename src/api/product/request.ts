import { SERVER_GET_ALL_PRODUCT_ENDPOINT, SERVER_ADD_PRODUCT_ENDPOINT } from "../../config/endpoints";
import { axioService, GET, POST } from "../../services/axiosServices";
import Api from "../API";


export class Product extends Api{
    async addProduct (params: any) {
        const response = await axioService(
            POST,
            SERVER_ADD_PRODUCT_ENDPOINT,
            params,
        )

        if (response && Api.isResponseSuccess(response.status)) {
            return  (response.data.data);
        }
    }    

    async getProducts () {
        const response = await axioService(
            GET,
            SERVER_GET_ALL_PRODUCT_ENDPOINT,
        )
        console.log(response.data.data)
        return response.data.data;
    }
}