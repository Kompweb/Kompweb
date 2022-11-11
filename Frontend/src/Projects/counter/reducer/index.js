import {
  // ADD_ONE,
  APPLY_NUMBER,
  // CHANGE_MEMORY,
  CHANGE_OPERATION,
  MEMORY_ADD,
  CLEAR_DISPLAY,
  MEMORY_APPLY,
} from '../actions';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
  }
};
// const calculateMemory = (total, memoryOp) => {
//   switch (memoryOp) {
//     case 'M+':
//       return total;
//     case 'MC':
//       return 0;
//     case 'MR':
//       return undefined;
//     default:
//       return null;
//   }
// };
const reducer = (state, action) => {
  switch (action.type) {
    // case ADD_ONE:
    //   return {
    //     ...state,
    //     total: state.total + 1,
    //   };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    case MEMORY_APPLY:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    // case CHANGE_MEMORY:
    //   const memoryOperator = action.payload;
    //   if (memoryOperator === 'MR') {
    //     return {
    //       ...state,
    //       total: state.memory,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       memory: calculateMemory(state.total, action.payload),
    //     };
    //   }

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };
    default:
      return state;
  }
};

export default reducer;
