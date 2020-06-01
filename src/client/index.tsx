import React from 'react';
import ReactDOM from 'react-dom';

import Test from './test/App';

import './style/index.sass';

const App = () => (
  <div className="app">
    <Test test="Hello" value={150} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
