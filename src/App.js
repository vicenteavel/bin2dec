import React, { useState } from 'react';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  function handleTyping(value) {
    const current_character = value.slice(-1);
    
    // Ignoring the character other than 0 or 1
    if(current_character && current_character !== '0' && current_character !== '1' ){
      alert('Only 0 or 1 can be entered');
      value = value.slice(0, -1);
    }
    
    setBinary(value);
  }

  function bin2Dec() {
    // 'Salve Maria'
  }

  return (
    <div className="box">
      <h1>Bin2Dec</h1>
      <input 
        type="text"
        maxLength='8'
        value={binary}
        onChange={e => handleTyping(e.target.value)}
        onKeyPress={bin2Dec}
      />

      <h4>{decimal}</h4>

    </div>
  );
}

export default App;
