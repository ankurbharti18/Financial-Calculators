import React, { useState } from 'react';

const SimpleInterest = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    setInterest(interest);
  };

  return (
    <div>
      <h2>Simple Interest Calculator</h2>
      <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="Principal" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="Rate (%)" />
      <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="Time (years)" />
      <button onClick={calculateInterest}>Calculate</button>
      {interest !== null && <p>Simple Interest: {interest}</p>}
    </div>
  );
};

export default SimpleInterest;
