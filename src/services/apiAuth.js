import axios from "axios";

const BASE_URL = "http://localhost:5003";

function signUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}

const apiAuth = {
    signUp,
}
export default apiAuth;