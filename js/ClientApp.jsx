import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <h1>s video</h1>
        <input type="text" placeholder="search videos" />
        <a>hello world</a>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('app'));