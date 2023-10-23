import React, {useState} from 'react';
import InputGroup from "./InputGroup";
import InputElement from "./InputElement";
import styles from './EarningsForm.module.css';
import ActionButtons from "./ActionButtons";

function EarningsForm(props) {

    const inputsList = [{index: "current-savings", label: "Current Savings ($)"},
                        {index: "yearly-contribution", label: "Yearly Savings ($)"},
                        {index: "expected-return", label: "Expected Interest (%, per year)"},
                        {index: "duration", label: "Investment Duration (years)"},]

    const [inputArray, setInputArray] = useState(['','','','']);
    const [alertVisibility, setAlertVisibility] = useState(false);

    const calculateHandler = (userInput) => {

        const yearlyData = []; // per-year results

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

        props.setTableState(yearlyData);
    };

    function onResetHandler() {
        setInputArray(['','','','']);
        props.setTableState([]);
    }


    function updateInput(event) {
        const newState = inputArray.map( (currentInput, currentId) => {
            if (event.target.id === inputsList[currentId].index){
                return event.target.value;
            } else return inputArray[currentId];
        })
        setInputArray(newState);
    }

    function submitHandler(event) {
        event.preventDefault();
        if ( inputArray.every(element => element !== '')){
            calculateHandler(inputArray);
        } else {
            setAlertVisibility(true);
            setTimeout(() => setAlertVisibility(false), 3000);
        }

    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <InputGroup>
                <InputElement index={inputsList[0].index}
                              label={inputsList[0].label}
                              value={inputArray[0]}
                              onChangeInput={updateInput}/>
                <InputElement index={inputsList[1].index}
                              label={inputsList[1].label}
                              value={inputArray[1]}
                              onChangeInput={updateInput}/>
            </InputGroup>
            <InputGroup>
                <InputElement index={inputsList[2].index}
                              label={inputsList[2].label}
                              value={inputArray[2]}
                              onChangeInput={updateInput}/>
                <InputElement index={inputsList[3].index}
                              label={inputsList[3].label}
                              value={inputArray[3]}
                              onChangeInput={updateInput}/>
            </InputGroup>
            <div className={styles.alert + ' ' + (alertVisibility ? styles.visible : styles.hidden)} >{'Fill empty lines!'}</div>
            <ActionButtons reset={onResetHandler}/>
        </form>
    );
}

export default EarningsForm;