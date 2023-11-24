import logo from './logo.svg';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { increaseCounter } from './redux/actions';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter)
  return (
    <div className="App">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </div>
  );
}

export default App;
