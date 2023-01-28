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

export const apiCart = {
    sendPaymentMethod,
}

export default apiCart;