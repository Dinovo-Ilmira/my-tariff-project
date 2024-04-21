import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Tariff from './Tariff';


function App() {
  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: '10', isHighlighted: false },
    { title: 'Безлимитный 450', price: 450, speed: '50', isHighlighted: false },
    { title: 'Безлимитный 550', price: 550, speed: '100', isHighlighted: true },
    { title: 'Безлимитный 1000', price: 1000, speed: '200', isHighlighted: false },
  ];

  return (
    <div className="app">
      <div className="tariffs">
        {tariffs.map((tariff, index) => (
          <Tariff
            key={index}
            title={tariff.title}
            price={tariff.price}
            speed={tariff.speed}
            isHighlighted={tariff.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
}

export default App;