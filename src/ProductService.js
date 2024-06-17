import axios from 'axios'

const PRODUCTS_REST_API_URL = process.env.REACT_APP_PRODUCTS_REST_API_URL || 'http://localhost:8180/product/list/all';
class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
}

export default new ProductService();