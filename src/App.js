import Header from "./components/header/Header";
import EarningsForm from "./components/form/EarningsForm";
import InvestmentTable from "./components/output/InvestmentTable";
import {useState} from "react";
import styles from './App.module.css';

function App() {

  const [tableData, setTableData] = useState([])

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    console.log(userInput);

    let currentSavings = +userInput[0]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput[1]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput[2] / 100;
    const duration = +userInput[3];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setTableData(yearlyData);

    // do something with yearlyData ...
  };

  const tableConditional = (tableData.length === 0) ?
      <p className={styles.placeholder}>There is no data provided yet.</p> :
      <InvestmentTable data={tableData}/>;

  return (
    <div>
      <Header/>
      <EarningsForm onFormSubmit={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {tableConditional}
    </div>
  );
}

export default App;
