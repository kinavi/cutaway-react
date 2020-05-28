import React from 'react';
import ReactDOM from 'react-dom';

import { Test } from './test'

import './style/index.sass'

const App = () => {
    return (
        <div className='app'>
            <Test test='Hello' value={150}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

