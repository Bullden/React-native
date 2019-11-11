import axios from 'axios';
import { urlApi } from './url';

export async function callApi(method: any, data ?: object, url:string = urlApi.api) {
  const response = await axios(`${url}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: !(method === "GET") ? JSON.stringify(data) : null
  })
  return await response
}
