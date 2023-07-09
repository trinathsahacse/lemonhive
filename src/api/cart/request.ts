import { SERVER_GET_ALL_CART_ENDPOINT, SERVER_ADD_CART_ENDPOINT } from "../../config/endpoints";
import { axioService, GET, POST } from "../../services/axiosServices";
import Api from "../API";


export class Cart extends Api{
    async addCart (params: any) {
        const response = await axioService(
            POST,
            SERVER_ADD_CART_ENDPOINT,
            params,
        )

        if (response && Api.isResponseSuccess(response.status)) {
            return  (response.data.data);
        }
    }    

    async getCarts () {
        const response = await axioService(
            GET,
            SERVER_GET_ALL_CART_ENDPOINT,
        )
        console.log(response.data.data)
        return response.data.data;
    }
}