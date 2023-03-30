import axios from "axios";

const myApi = axios.create({
    baseURL : "http://localhost:8080/"
})
//If end point does not work, check the baseURL value against port number

export const getAllCategories = ()=>{
    return myApi.get("category").then((res)=>{
        return res.data;
    })
}

export const getAllCustomerExpenses = ()=>{
    return myApi.get("customer/1/expenses").then((res)=>{
        return res.data;
    })
} 

export const addNewExpense = (expenseObj)=>{
    const {amount, note, status} = expenseObj

    return myApi.post("customer/1/expenses", {amount, note, status}).then((res)=>{
        console.log(res)
        return res;
    })
}
