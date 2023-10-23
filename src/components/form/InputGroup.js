import React from 'react';
import styles from './InputGroup.module.css';

function InputGroup(props) {
    return (
        <div className={styles['input-group']}>{props.children}</div>
    );
}

export default InputGroup;