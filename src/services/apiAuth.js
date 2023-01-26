import axios from "axios";

const BASE_URL = "http://localhost:5000"; // colocar em .env, usar lib dotenv, e colocar aqui REACT_APP_BASE_URL

function signUp(body) {
    return axios.post(`${BASE_URL}/signup`, body); //no back esta sign-up com hifen
}

const apiAuth = {
    signUp,
}
export default apiAuth;