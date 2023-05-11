import React from 'react';
import './style.css';
import Counter from './Counter';

export default function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: 'auto',
        border: '5px solid tomato',
        padding: '40px',
        marginTop: '100px',
        width: 'fit-content',
      }}
    >
      <h3 style={{ color: 'blue' }}>Create a simple counter / timer</h3>
      <Counter />
    </div>
  );
}
