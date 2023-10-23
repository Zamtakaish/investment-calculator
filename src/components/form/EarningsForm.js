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

    function updateInput(event) {
        const newState = inputArray.map( (currentInput, currentId) => {
            if (event.target.id === inputsList[currentId].index){
                return event.target.value;
            } else return inputArray[currentId];
        })
        setInputArray(newState);
        console.log(newState);
    }

    return (
        <form className={styles.form}>
            <InputGroup>
                <InputElement index={inputsList[0].index} label={inputsList[0].label} onChangeInput={updateInput}/>
                <InputElement index={inputsList[1].index} label={inputsList[1].label} onChangeInput={updateInput}/>
            </InputGroup>
            <InputGroup>
                <InputElement index={inputsList[2].index} label={inputsList[2].label} onChangeInput={updateInput}/>
                <InputElement index={inputsList[3].index} label={inputsList[3].label} onChangeInput={updateInput}/>
            </InputGroup>
            <ActionButtons />
        </form>
    );
}

export default EarningsForm;