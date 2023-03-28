import './App.css';
import { getAllCategories } from './Util/api';

function App() {

  getAllCategories();
  return (
    <div className="App">
     <p> Happy APP </p>
    </div>
  );
}

export default App;
