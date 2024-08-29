import axios, { InternalAxiosRequestConfig } from "axios";
import { ICategoria } from "../interfaces/ICategoria";

const http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Accept: "application/json",
        Content: "application/json"
    }
});

http.interceptors.request.use(function (config: InternalAxiosRequestConfig<string>) {
    
    const token = sessionStorage.getItem('token');
    
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, function (error) {

    console.log('Ocorreu um erro em algum dos interceptadores do axios');
    return Promise.reject(error);
});

export default http

export const obterCategoriaporSlug = async (slug: string) => {
    const resposta = await http.get<Array<ICategoria>>("categorias", {
        params: {
            slug
        }
    })

    return resposta.data[0];
}