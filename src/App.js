import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Skyline Pirates!</h1>
      <p>
        Click the link below to learn more:
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'blue',
          fontWeight: 'bold',
        }}
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
