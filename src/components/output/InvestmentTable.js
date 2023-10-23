import React from 'react';
import styles from './InvestmentTable.module.css';

function InvestmentTable(props) {

    let interestTotal = 0;
    let contributionTotal = 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    console.log(props.data);

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map(tableRow => {
                    interestTotal += tableRow.yearlyInterest;
                    contributionTotal += tableRow.yearlyContribution;
                    return (
                        <tr>
                            <td>{tableRow.year}</td>
                            <td>{formatter.format(tableRow.savingsEndOfYear)}</td>
                            <td>{formatter.format(tableRow.yearlyInterest)}</td>
                            <td>{formatter.format(interestTotal)}</td>
                            <td>{formatter.format(contributionTotal)}</td>
                         </tr>);
                })
            }
            </tbody>
        </table>
    );
}

export default InvestmentTable;