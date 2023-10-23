import React from 'react';
import styles from './InvestmentTable.module.css';

function InvestmentTable(props) {

    let interestTotal = 0;
    let contributionTotal = 0;

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
                            <td>{tableRow.savingsEndOfYear}</td>
                            <td>{tableRow.yearlyInterest}</td>
                            <td>{interestTotal}</td>
                            <td>{contributionTotal}</td>
                         </tr>);
                })
            }
            </tbody>
        </table>
    );
}

export default InvestmentTable;