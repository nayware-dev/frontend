import { addNewExpense } from "../Util/api"

export const AddExpenseForm = () => {


const handleSubmit=(formData)=>{
    addNewExpense(formData).then((res)=>{
window.location.reload(true)

    })
}
return (

<form onSubmit={(event)=>{
    event.preventDefault()
    const formData = {
amount : event.target[0].value,
note : event.target[1].value,
status : event.target[2].value

    }
    //Getting an error because of string value not boolean
    formData.status === "true" ? formData.status = true : formData.status = false;

    handleSubmit(formData)
}}>
<br/>
<label for="amount">Amount:</label>
<input type="number" id="Amount" name="amount" placeholder="0.00"/>
<label for="status">Paid/Unpaid?</label>

{/* <input type="text" id="status" name="status" value="status"/> */}
<select id="status" name="Paid/Unpaid?">
   <option value="true">Paid</option>
   <option value="false">Unpaid</option>
 </select>
<br/><br/>
<label for="note">Note:</label><br/>
<textarea id="note" rows="5" cols="70" ></textarea>
<br/><br/><br/>
<input type="submit" value="Submit"></input>
</form>



)



}
