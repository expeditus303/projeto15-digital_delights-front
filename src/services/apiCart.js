import axios from "axios";

function getCart(user){
    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }
    return axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
}
function addProduct(user,productId,price) {
    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }
    const body = {
        productId,
        price
    }
    return axios.post(`${process.env.REACT_APP_API_URL}/cart`, body, config)

}

function removeOneProduct(user,productId) {
    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }
    const body = {
        productId
    }
    return axios.put(`${process.env.REACT_APP_API_URL}/cart`, body, config)

}

function emptyCart(user) {
    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }
    
    return axios.delete(`${process.env.REACT_APP_API_URL}/cart`, config)
}

const apiCart = {
    getCart,
    addProduct,
    removeOneProduct,
    emptyCart
}

export default apiCart