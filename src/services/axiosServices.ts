import axios, { AxiosResponse } from 'axios';
import { LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME } from './localStorage';
import { getLocalStorage } from './localStorage';
import { AccountsAPI } from '../api/accounts/request';

export const GET: string = 'GET';
export const POST: string = 'POST';
export const PUT: string = 'PUT';
export const DELETE: string = 'DELETE';

export const axioGet = async (
  url: string,
  params: object,
  authorizedToken?: string,
  headers?: object
): Promise<AxiosResponse> => {
  const token: string = authorizedToken ? authorizedToken : getLocalStorage(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME);

  const config = {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  };
  if (headers) {
    config.headers = { ...config.headers, ...headers };
  }

  const response: AxiosResponse = await axios.get(url, {
    ...config,
    params,
  });
  return response;
};

export const axioPost = async (
  url: string,
  params: object,
  authorizedToken?: string
): Promise<AxiosResponse> => {
  const token: string = authorizedToken ? authorizedToken : getLocalStorage(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME);
  const config = {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  };

  const response: AxiosResponse = await axios.post(url, params, config);
  return response;
};

export const axioPut = async (
  url: string,
  params: object,
  authorizedToken?: string
): Promise<AxiosResponse> => {
  const token: string = authorizedToken ? authorizedToken : getLocalStorage(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME);
  const config = {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  };

  const response: AxiosResponse = await axios.put(url, params, config);
  return response;
};

export const axioDelete = async (
  url: string,
  params: object,
  authorizedToken?: string
): Promise<AxiosResponse> => {
  const token: string = authorizedToken ? authorizedToken : getLocalStorage(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME);
  const config = {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${token}`,
    },
  };

  const response: AxiosResponse = await axios.delete(url, {
    ...config,
    params,
  });
  return response;
};

export const axioService = async (
  type: string,
  url: string,
  params?: any,
  authorizedToken?: string,
  flogout: boolean = true,
  headers?: object
): Promise<AxiosResponse> => {
  let response: AxiosResponse;
  try {
    if (type === POST) {
      response = await axioPost(url, params, authorizedToken);
    } else if (type === DELETE) {
      response = await axioDelete(url, params, authorizedToken);
    } else if (type === PUT) {
      response = await axioPut(url, params, authorizedToken);
    } else {
      response = await axioGet(url, params, authorizedToken, headers);
    }
    return response;
  } catch (e: any) {
    if (e?.response?.status === 401) {
      if (flogout) {
        new AccountsAPI().logoutForcely();
      }
      throw e;
    } else {
      throw e;
    }
  }
};