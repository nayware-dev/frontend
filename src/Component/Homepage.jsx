import { getAllCategories, getAllCustomerExpenses } from "../Util/api";
import { useState, useEffect } from "react";
import { ExpenseTable } from "./ExpenseTable";

export const Homepage = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
    getAllCategories().then((categoriesFromServer)=>{
        console.log(categoriesFromServer)
        return setCategories(categoriesFromServer)
    })       
    },[])

// return (<ul>
//     {categories.map(category => {
//         return (
//             <li>{category.description}</li>
//         )
//     })}
// </ul>)

return (
    <ExpenseTable/>

)
}

