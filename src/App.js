import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from './actions/index'

function App() {

  const myState = useSelector((state) => state.changeNumber)
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
