import Header from "./components/header/Header";
import EarningsForm from "./components/form/EarningsForm";
import InvestmentTable from "./components/output/InvestmentTable";
import {useState} from "react";
import styles from './App.module.css';

function App() {

    const [tableData, setTableData] = useState([])

    function setTableHandler(table) {
        setTableData(table);
    }

  const tableConditional = (tableData.length === 0) ?
      <p className={styles.placeholder}>There is no data provided yet.</p> :
      <InvestmentTable data={tableData}/>;

  return (
    <div>
      <Header/>
      <EarningsForm setTableState={setTableHandler}/>
      {tableConditional}
    </div>
  );
}

export default App;
