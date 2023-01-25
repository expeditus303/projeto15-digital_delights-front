import axios from "axios";

const BASE_URL = "http://localhost:5000";

function signUp(body) {
    return axios.post(`${BASE_URL}/signup`, body);
}

const apiAuth = {
    signUp,
}
export default apiAuth;