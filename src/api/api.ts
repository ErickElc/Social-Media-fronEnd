import axios from "axios";

const apis = ['http://localhost:4000/', 'https://social-media-senai.herokuapp.com/']

const http = axios.create({
    baseURL: apis[0]
})



export default http;