// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home">
            <div className="grid-container">
            <div className="container" onClick={() => navigateTo('/sip-calculator')}>
                <h2>SIP Calculator</h2>
                <p>A SIP Calculator helps estimate the returns on periodic investments made through a Systematic Investment Plan (SIP) in mutual funds over a specific period.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/lumpsum-calculator')}>
                <h2>Lumpsum Calculator</h2>
                <p>A Lumpsum Calculator helps estimate the future value of a one-time investment made in mutual funds or other financial instruments.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/simple-calculator')}>
                <h2>Simple Interest</h2>
                <p>Simple interest is a method of calculating the interest charge on a loan or principal investment based on the original principal and the rate of interest over time.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/compound-calculator')}>
                <h2>Compound Interest</h2>
                <p>Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/fixed-calculator')}>
                <h2>Fixed Deposit</h2>
                <p>A fixed deposit is a financial instrument provided by banks that offers a higher interest rate than a regular savings account, where the money is locked in for a predetermined period</p>
            </div>
            <div className="container" onClick={() => navigateTo('/recurring-calculator')}>
                <h2>Recurring Deposit</h2>
                <p>A recurring deposit is a special kind of term deposit offered by banks where customers can deposit a fixed amount regularly and earn interest.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/emi-calculator')}>
                <h2>EMI Calculator</h2>
                <p>EMI is a fixed payment amount made by a borrower to a lender at a specified date each calendar month, including both principal and interest.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/retire-calculator')}>
                <h2>Retirement Calculator</h2>
                <p>Retirement is the period in a person's life when they stop working full-time and typically rely on savings, pensions, or other financial support systems for income.</p>
            </div>
            <div className="container" onClick={() => navigateTo('/incometax-calculator')}>
                <h2>Income Tax Calculator</h2>
                <p>An income tax calculator is a tool used to estimate the amount of income tax an individual or business owes based on their taxable income and applicable tax rates</p>
            </div>
            <div className="container" onClick={() => navigateTo('/gst-calculator')}>
                <h2>GST Calculator</h2>
                <p>A GST calculator is a tool that helps calculate the Goods and Services Tax (GST) amount applicable on goods or services.</p>
            </div>
            </div>
        </div>

    );
};

export default HomePage;
