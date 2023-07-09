

export const LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME = 'lemonhive_token';
export const LOCAL_STORAGE_AUTHORIZED_USER_KEY = 'lemonhive_user';


export const setLocalStorage = (name : string, value: string) => {
    localStorage.setItem(name, value);
  };

export const getLocalStorage = (name: string) => {
    return localStorage.getItem(name) || '';
  
  };