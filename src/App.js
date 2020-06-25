import React, { useState } from 'react';

import './styles.css';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  function handleTyping(value) {
    // current character is the last one entered
    const current_character = value.slice(-1);
    
    // Ignoring the character other than 0 or 1
    if(current_character && current_character !== '0' && current_character !== '1' ){
      alert('Only 0 or 1 can be entered');
      value = value.slice(0, -1); 
    }
    
    setBinary(value);
  }

  function bin2Dec(event) {
    // Get event only with 'Enter' pressed and 'binary' state is not empty
    if(event.key !== 'Enter' || !binary) {
      return;
    }

    // logic to convert binary to decimal
    let result = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
      const base = 2;
      const power = binary.length - (i + 1);

      result += binary[i]*Math.pow(base, power);
    }

    setDecimal(String(result));
  }

  return (
    <div className="box">
      <h1>Bin2Dec</h1>

      <input 
        type="text"
        maxLength='8'
        value={binary}
        onChange={e => handleTyping(e.target.value)}
        onKeyPress={e => bin2Dec(e)}
        placeholder="Enter a binary number"
      />

      <h4>
        { decimal ? 'Resultado: ': ''}
        {decimal}
      </h4>

    </div>
  );
}

export default App;
