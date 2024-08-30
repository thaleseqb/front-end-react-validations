import axios, { InternalAxiosRequestConfig } from "axios";
import { ICategoria } from "../interfaces/ICategoria";
import { ILivro } from "../interfaces/ILivro";
import { IAutor } from "../interfaces/IAutor";

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

export const obteLancamentos = async () => {
    const resposta = await http.get<Array<ILivro>>("public/lancamentos");

    return resposta.data;
}

export const obterMaisVendidos = async () => {
    const resposta = await http.get<Array<ILivro>>("public/mais-vendidos");

    return resposta.data;
}

export const obterProdutosDaCategoria = async (categoria: ICategoria) => {
    const resposta = await http.get<Array<ILivro>>("livros", {
        params: {
            categoria: categoria.id
        }
    });

    return resposta.data;
}

export const obterLivroPorslug = async (slug: string) => {
    const resposta = await http.get<Array<ILivro>>("livros", {
        params: {
            slug
        }
    })

    return resposta.data[0];
}

export const obterAutorPorId = async (idAutor:number) => {
    const resposta = await http.get<Array<IAutor>>("autores", {
        params : {
            id:idAutor
        }
    });

    return resposta.data[0];
}