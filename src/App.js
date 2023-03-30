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
     <div id="p1">
     <AddExpenseForm/>
     </div>
    </div>
  );
}

export default App;
