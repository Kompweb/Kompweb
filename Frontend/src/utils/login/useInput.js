import { useState } from 'react';

// A custom hook that reuse stateful logic
const UseInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };

  return [value, setValue, handleChanges];
};

export default UseInput;
