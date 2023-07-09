class Api {
    static isResponseSuccess = (status : any) => {
      if (!status) return;
      return status >= 200 && status < 300;
    };
  
    mapEndpoint = (endpoint: any, value: any, needle: any) => {
      return endpoint.replace(needle, value);
    };
  }
  
  export default Api;