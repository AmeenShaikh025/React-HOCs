
import './App.css';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counterfun1 from './Counterfun1';
import Counterfun2 from './Counterfun2';

function App() {
  return (
    <div className="App">
      <h2>Class based HOC</h2>
      <Counter1 />
      <Counter2 />

      <br />
      <br />
      <br />
      
      <h2>Funtional HOC</h2>
      <Counterfun1 />
      <Counterfun2 />
    </div>
  );
}

export default App;
