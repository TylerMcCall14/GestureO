import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Card.module.css';
import AboutMe from '../components/AboutMe.js';
import QuoteBox from '../components/QuoteBox.js';
function Card ( {ronism, getQuote} ) {

    return(
        <div className={styles.card}>
            <AboutMe name="Tyler McCall" food="Steak" number={14}/>
            <QuoteBox ronism={ronism} getQuote={getQuote}/>
        </div>
    )
}

Card.propTypes = {
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired,
}

export default Card;