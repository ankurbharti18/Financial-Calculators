import React, { useState } from 'react';

const Retirement = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [rate, setRate] = useState('');
  const [totalSavings, setTotalSavings] = useState(null);

  const calculateSavings = () => {
    const years = retirementAge - currentAge;
    const months = years * 12;
    const totalSavings = monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
    setTotalSavings(totalSavings);
  };

  return (
    <div>
      <h2>Retirement Calculator</h2>
      <input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} placeholder="Current Age" />
      <input type="number" value={retirementAge} onChange={e => setRetirementAge(e.target.value)} placeholder="Retirement Age" />
      <input type="number" value={monthlySavings} onChange={e => setMonthlySavings(e.target.value)} placeholder="Monthly Savings" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <button onClick={calculateSavings}>Calculate</button>
      {totalSavings !== null && <p>Total Savings at Retirement: {totalSavings}</p>}
    </div>
  );
};

export default Retirement;
