import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

function signUp(body) {
    return axios.post(`${REACT_APP_APU_URL}/sign-up`, body);
}

const apiAuth = {
    signUp,
}
export default apiAuth;