// src/components/LumpsumCalculator.js
import React, { useState } from 'react';

const LumpsumCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');
  const [maturityAmount, setMaturityAmount] = useState('');

  const calculateLumpsum = (e) => {
    e.preventDefault();
    const rate = interestRate / 100;
    const futureValue = principal * Math.pow(1 + rate, period);
    setMaturityAmount(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2>Lumpsum Calculator</h2>
      <form onSubmit={calculateLumpsum}>
        <div>
          <label>Principal Amount:</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
        </div>
        <div>
          <label>Period (in years):</label>
          <input type="number" value={period} onChange={(e) => setPeriod(e.target.value)} required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {maturityAmount && <h3>Maturity Amount: {maturityAmount}</h3>}
    </div>
  );
};

export default LumpsumCalculator;
