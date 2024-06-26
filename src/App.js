import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SIPCalculator from './components/SipCalculator';
import LumpsumCalculator from './components/LumpsumCalculator';
import Navbar from './components/Navbar';
import SimpleInterest from './components/SimpleInterest';
import CompoundInterest from './components/CompoundInterest';
import FixedDeposit from './components/FixedDeposit';
import RecurringDeposit from './components/ReccurringDeposit';
import Emi from './components/Emi';
import Retirement from './components/Retirement';
import IncomeTax from './components/IncomeTax';
import GstCalculator from './components/gstCalculator';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sip-calculator" element={<SIPCalculator />} />
          <Route path="/lumpsum-calculator" element={<LumpsumCalculator />} />
          <Route path="/simple-calculator" element={<SimpleInterest />} />
          <Route path="/compound-calculator" element={<CompoundInterest />} />
          <Route path="/fixed-calculator" element={<FixedDeposit />} />
          <Route path="/recurring-calculator" element={<RecurringDeposit />} />
          <Route path="/emi-calculator" element={<Emi />} />
          <Route path="/retire-calculator" element={<Retirement />} />
          <Route path="/incometax-calculator" element={<IncomeTax />} />
          <Route path="/gst-calculator" element={<GstCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
