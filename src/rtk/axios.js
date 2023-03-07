import axios from "axios";

const createRequest = axios.create({
    baseURL:'http://localhost:9000/blogs'
})

export default createRequest;