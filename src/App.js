import './App.css';
import { useSelector, useDispatch } from 'react-redux' // importing redux functions for changing and getting the state
import {incNumber, decNumber} from './actions/index' // importing actions from actions folder

function App() {

  // for geeting the state
  const myState = useSelector((state) => state.changeNumber)

  // for changing the state
  const dispatch = useDispatch()

  return (
    <div className="App">
      
      <div className="d-flex justify-content-center">

        <div className="card">
          <div className="card-body">
            
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
              onClick={()=>dispatch(decNumber())}
              type="button" className="btn btn-primary">-</button>
              <button type="button" disabled className="btn btn-outline-secondary">{myState}</button>
              <button
              onClick={()=>dispatch(incNumber())}
              type="button" className="btn btn-primary">+</button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
