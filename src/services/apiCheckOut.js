import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function createConfig(token){
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function sendPaymentMethod(token) {
    return axios.post(`${REACT_APP_APU_URL}/payment-method`, createConfig(token));
}

export const apiCart = {
    sendPaymentMethod,
}

export default apiCart;