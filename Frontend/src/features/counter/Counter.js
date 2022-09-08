import React, { useReducer } from 'react';
import styles from '../../styles/counter.module.css';

// import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { decrement, increment, reset } from './counterSlice';
import CalcButton from './calcBtn';
import TotalDisplay from './totalDisplay';

import reducer, { initialState } from './reducer';
import { applyNumber, changeOp } from './actions';

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  // const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();

  const handleNumberClick = number => {
    // console.log('here');
    dispatch(applyNumber(number));
  };

  const handleOpClick = operator => {
    dispatch(changeOp(operator));
  };
  return (
    <>
      <h3>React Redux</h3>
      <div className="redux-counter">
        <div className={styles.row}>
          {/* <button
          className={styles.btn}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button> */}
          {/* <span className={styles.value}>{count}</span> */}
          {/* <button
          className={styles.btn}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
        </div>
        <div className="container row mt-5">
          <div className="col-md-12 d-flex justify-content-center">
            <form className="cal">
              <TotalDisplay value={state.total} />
              <div className="row details">
                <span id="operation">
                  <b>Operation:</b> {state.operation}
                </span>
                <span id="memory">
                  <b>Memory:</b> {state.memory}
                </span>
              </div>

              <div className="row">
                <CalcButton value={'M+'} />
                <CalcButton value={'MR'} />
                <CalcButton value={'MC'} />
              </div>

              <div className="row">
                <CalcButton value={1} onClick={() => handleNumberClick(1)} />
                <CalcButton value={2} onClick={() => handleNumberClick(2)} />
                <CalcButton value={3} onClick={() => handleNumberClick(3)} />
              </div>

              <div className="row">
                <CalcButton value={4} onClick={() => handleNumberClick(4)} />
                <CalcButton value={5} onClick={() => handleNumberClick(5)} />
                <CalcButton value={6} onClick={() => handleNumberClick(6)} />
              </div>

              <div className="row">
                <CalcButton value={7} onClick={() => handleNumberClick(7)} />
                <CalcButton value={8} onClick={() => handleNumberClick(8)} />
                <CalcButton value={9} onClick={() => handleNumberClick(9)} />
              </div>

              <div className="row">
                <CalcButton value={'+'} onClick={() => handleOpClick('+')} />
                <CalcButton value={'*'} onClick={() => handleOpClick('*')} />
                <CalcButton value={'-'} onClick={() => handleOpClick('-')} />
              </div>

              <div className="row ce_button">
                <CalcButton value={'CE'} onClick={() => handleOpClick} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
