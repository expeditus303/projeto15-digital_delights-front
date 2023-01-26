import axios from "axios";

const BASE_URL = 'http://localhost:5003';

function createConfig(token){
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function sendPaymentMethod(token) {
    return axios.post(`${BASE_URL}/payment-method`, createConfig(token));
}

export const apiCart = {
    sendPaymentMethod,
}

export default apiCart;