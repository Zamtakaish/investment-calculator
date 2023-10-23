import React from 'react';
import styles from './InputElement.module.css'

function InputElement(props) {
    return (
        <p>
            <label className={styles['form_label']} htmlFor={props.index}>{props.label}</label>
            <input className={styles['form_input']} type="number" id={props.index} onChange={props.onChangeInput}/>
        </p>
    );
}

export default InputElement;