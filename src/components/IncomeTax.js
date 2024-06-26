import React, { useState } from 'react';

const IncomeTax = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
    setTax(tax);
  };

  return (
    <div>
      <h2>Income Tax Calculator</h2>
      <input type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="Annual Income" />
      <button onClick={calculateTax}>Calculate</button>
      {tax !== null && <p>Income Tax: {tax}</p>}
    </div>
  );
};

export default IncomeTax;
