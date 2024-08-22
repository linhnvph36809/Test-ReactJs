import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-test-web.agiletech.vn",
    timeout: 5000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
})

instance.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')    
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

export default instance 