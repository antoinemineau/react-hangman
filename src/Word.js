import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Word.css'

const Word = ({word, keysClicked}) => (
    word.map((letter, index) => (
        <div className="word_letter" key={index}>
            {keysClicked.includes(letter) ? letter : '_'}
        </div>
    ))
)

Word.propTypes = {
    word: PropTypes.array.isRequired,
    keysClicked: PropTypes.array.isRequired
}

export default Word