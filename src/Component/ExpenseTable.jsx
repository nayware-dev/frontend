    import { getAllCustomerExpenses } from "../Util/api";
    import { useState, useEffect } from "react";

export const ExpenseTable = () => {
    
        const [expenses, setExpenses]=useState([])

        useEffect(()=>{
        getAllCustomerExpenses().then((expensesFromServer)=>{
            return setExpenses(expensesFromServer)
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
        <table>
            <tr>
                <th>Expense ID</th>
                <th>Amount</th>
                <th>Note</th>
                <th>Paid?</th>
            </tr>
           {
            expenses.map(expense => {
                return (
    
                    <tr>
                        <td>{expense.id}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.note}</td>
                        <td>{
                            expense.status === true ? "Paid" : "Unpaid"

                            }</td>

                    </tr>
                )
            })

           }



        </table>

    )
}