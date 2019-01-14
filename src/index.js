import React from 'react';
import ReactDOM from 'react-dom';

class TestApp extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
      );
    }
}

ReactDOM.render(<TestApp />, document.getElementById('root'));
