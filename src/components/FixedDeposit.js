import React, { useState } from 'react';

const FixedDeposit = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState(null);

  const calculateAmount = () => {
    const amount = principal * Math.pow((1 + rate / 100), time);
    setAmount(amount);
  };

  return (
    <div>
      <h2>Fixed Deposit Calculator</h2>
      <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="Principal" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (years)" />
      <button onClick={calculateAmount}>Calculate</button>
      {amount !== null && <p>Maturity Amount: {amount}</p>}
    </div>
  );
};

export default FixedDeposit;
