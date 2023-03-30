import './App.css';
import { AddExpenseForm } from './Component/AddExpenseForm';
import { Homepage } from './Component/Homepage';

function App() {

  return (
    <div className="App">
      <header> Expenses Tracking App</header>
    <br/>
    <br/>
     <Homepage/>
     <p1>
     <AddExpenseForm/>
     </p1>
    </div>
  );
}

export default App;
