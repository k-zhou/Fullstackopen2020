import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Nothing here but us trees!<br/>
      ... and a Full Stack Course of 2020
    </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
