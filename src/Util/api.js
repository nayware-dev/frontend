import axios from "axios";

const myApi = axios.create({
    baseURL : "http://localhost:8080/"
})
//If end point does not work, check the baseURL value against port number

export const getAllCategories = ()=>{
    return myApi.get("category").then((res)=>{
        console.log(res);
        return res;
    })
}