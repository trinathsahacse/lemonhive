import { SERVER_LOGIN_ROUTE, LOGIN_ROUTE } from "../../config/endpoints";
import { axioService, GET, POST } from "../../services/axiosServices";
import Api from "../API";
import { LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME } from "../../services/localStorage";


export class AccountsAPI extends Api{
    async login(params:any) {

        const response = await axioService(
            POST,
            SERVER_LOGIN_ROUTE,
            params,

        )

        if (response && Api.isResponseSuccess(response.status)) {
            return response.data;
        }

    }
    logoutForcely() {
        localStorage.removeItem(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME);
        window.location.href = LOGIN_ROUTE;
    }
}