import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';
import CalcButton from './calcBtn';
// import TotalDisplay from './totalDisplay';

import styles from '../../styles/counter.module.css';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="redux-counter">
      <h3>React Redux</h3>
      <div className={styles.row}>
        <button
          className={styles.btn}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.btn}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            {/* <TotalDisplay value={0} /> */}
            {/* <div className="row details">
              <span id="operation">
                <b>Operation:</b> X
              </span>
              <span id="memory">
                <b>Memory:</b> 0
              </span>
            </div> */}

            <div className="row">
              <CalcButton value={'M+'} />
              <CalcButton value={'MR'} />
              <CalcButton value={'MC'} />
            </div>

            <div className="row">
              <CalcButton value={1} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              <CalcButton value={'+'} />
              <CalcButton value={'*'} />
              <CalcButton value={'-'} />
            </div>

            <div className="row ce_button">
              <CalcButton value={'CE'} />
            </div>
          </form>
        </div>
      </div>
      <button
        className={styles.resetBtn}
        aria-label="Reset"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
}
