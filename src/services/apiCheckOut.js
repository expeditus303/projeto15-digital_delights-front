import axios from "axios";

function createConfig(token){
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function sendPaymentMethod(token) {
    return axios.post(`${process.env.REACT_APP_API_URL}/payment-method`, createConfig(token));
}

function getPaymentMethod(token) {
    return axios.get(`${process.env.REACT_APP_API_URL}/checkout`, createConfig(token));
}

export const apiCheckout = {
    sendPaymentMethod, 
    getPaymentMethod,
}

export default apiCheckout;