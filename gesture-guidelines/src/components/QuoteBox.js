import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/QuoteBox.module.css';

function QuoteBox({ronism, getQuote}) {

    return (
        <div className={styles.box}>
            <h4 className={styles.box__title}>Great Ronism:</h4>
            <p className={styles.box__quote}>{ronism}</p>
            <button className={styles.box__btn} onClick={getQuote}>Get Quote</button>
        </div>
    )
}

QuoteBox.propTypes = {
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired,
}

export default QuoteBox;
