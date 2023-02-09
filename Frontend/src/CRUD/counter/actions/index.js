export const ADD_ONE = 'ADD_ONE';
export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const CHANGE_MEMORY = 'CHANGE_MEMORY';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const MEMORY_TOTAL = 'MEMORY_TOTAL';
export const MEMORY_ADD = 'MEMORY_ADD';
export const MEMORY_APPLY = 'MEMORY_APPLY';

export const addOne = () => {
  return { type: ADD_ONE };
};
export const applyNumber = number => {
  return { type: APPLY_NUMBER, payload: number };
};
export const changeMem = memoryOp => {
  return { type: CHANGE_MEMORY, payload: memoryOp };
};
export const changeOp = operator => {
  return { type: CHANGE_OPERATION, payload: operator };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const addMemory = () => {
  return { type: MEMORY_ADD };
};

export const applyMemory = () => {
  return { type: MEMORY_APPLY };
};