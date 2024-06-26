import React, { useState } from 'react';

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compoundings, setCompoundings] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const amount = principal * Math.pow((1 + rate / (100 * compoundings)), compoundings * time);
    const interest = amount - principal;
    setInterest(interest);
  };

  return (
    <div>
      <h2>Compound Interest Calculator</h2>
      <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="Principal" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (years)" />
      <input type="number" value={compoundings} onChange={e => setCompoundings(e.target.value)} placeholder="Compoundings per year" />
      <button onClick={calculateInterest}>Calculate</button>
      {interest !== null && <p>Compound Interest: {interest}</p>}
    </div>
  );
};

export default CompoundInterest;
