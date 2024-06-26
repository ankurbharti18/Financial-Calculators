import React, { useState } from 'react';

const Emi = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const monthlyRate = rate / (12 * 100);
    const months = time * 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emi);
  };

  return (
    <div>
      <h2>EMI Calculator</h2>
      <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="Principal" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (years)" />
      <button onClick={calculateEmi}>Calculate</button>
      {emi !== null && <p>EMI: {emi}</p>}
    </div>
  );
};

export default Emi;
