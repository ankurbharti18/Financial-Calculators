import React, { useState } from 'react';

const GstCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [gstAmount, setGstAmount] = useState(null);

  const calculateGst = () => {
    const gst = (amount * rate) / 100;
    setGstAmount(gst);
  };

  return (
    <div>
      <h2>GST Calculator</h2>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="GST Rate (%)" />
      <button onClick={calculateGst}>Calculate</button>
      {gstAmount !== null && <p>GST Amount: {gstAmount}</p>}
    </div>
  );
};

export default GstCalculator;
