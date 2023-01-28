import axios from "axios"

function getAllProducts() {
    return axios.get(`${process.env.REACT_APP_API_URL}/`)
}

function getProductById(id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/${id}`)
}

const apiProducts = {
    getAllProducts,
    getProductById
}

export default apiProducts