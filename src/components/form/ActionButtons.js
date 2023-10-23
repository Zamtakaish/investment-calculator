import React from 'react';
import styles from './ActionButons.module.css'

function ActionButtons(props) {
    return (
        <p className={styles.actions}>
            <button type="reset" className={styles.buttonAlt} onClick={props.reset}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </p>
    );
}

export default ActionButtons;