import React, { useState } from 'react';

const RecurringDeposit = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturityAmount = () => {
    const months = time * 12;
    const maturityAmount = monthlyDeposit * months + (monthlyDeposit * months * (months + 1) / 2) * rate / 1200;
    setMaturityAmount(maturityAmount);
  };

  return (
    <div>
      <h2>Recurring Deposit Calculator</h2>
      <input type="number" value={monthlyDeposit} onChange={e => setMonthlyDeposit(e.target.value)} placeholder="Monthly Deposit" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (years)" />
      <button onClick={calculateMaturityAmount}>Calculate</button>
      {maturityAmount !== null && <p>Maturity Amount: {maturityAmount}</p>}
    </div>
  );
};

export default RecurringDeposit;
