import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';
import styles from '../../styles/counter.module.css';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="redux-counter">
      <h4>Redux Toolkit with React</h4>
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
