import axios from "axios";

const apis = ['http://localhost:4000/', 'https://social-media-senai.herokuapp.com/', 'https://socialmediabackendv2-production.up.railway.app']

const http = axios.create({
    baseURL: apis[2]
})



export default http;