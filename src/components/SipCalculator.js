// src/components/SIPCalculator.js
import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');
  const [maturityAmount, setMaturityAmount] = useState('');

  const calculateSIP = (e) => {
    e.preventDefault();
    const rate = interestRate / 100 / 12;
    const months = period * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    setMaturityAmount(futureValue.toFixed(2));
  };

  return (
    <div className='container'>
      <h2>SIP Calculator</h2>
      <form onSubmit={calculateSIP}>
        <div>
          <label>Monthly Investment:</label>
          <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} required />
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

export default SIPCalculator;
