import axios from "axios";
import { Connect } from "vite";

//criando a conexão com a api
const api = axios.create({
    baseURL: 'https://hocalhost:3307'
})

//exportando a api de dentro da função
export default api;
