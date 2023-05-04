import React from 'react';
import './App.css';
import DogPark from './components/DogPark';

class App extends React.Component {
  render() {
    const header = 'see cute dogs FREE';
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Dog api
          </p>
        </header> */}
        <div className="title-div">
          <h2 className="no-margin title">{ header }</h2>
          <h2 className="no-margin title delay1">{ header }</h2>
          <h2 className="no-margin title delay2">{ header }</h2>
        </div>
        <DogPark />
      </div>
    );
  }
}

export default App;
