import axios from "axios";

function signUp(body) {
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
}

const apiAuth = {
    signUp,
}
export default apiAuth;