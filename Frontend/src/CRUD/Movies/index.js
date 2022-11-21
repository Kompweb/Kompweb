import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './reducers';
import App from './components/App';
// import { BrowserRouter as Router } from 'react-router-dom';

// const store = createStore(reducer);
function MovieList() {
  return <App />;
}

export default MovieList;

//   <Router>
//   <Provider store={store}>
//     <Router>
//       <App />
//   </Router>,
//     </Router>
//   </Provider>,
