import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Key.css'

const Key = ({letter, effect, onClick, disabled}) => (
    <button className={`key ${effect}`} onClick={() => onClick(letter)} disabled={disabled}>
        {letter} {disabled}
    </button>
)

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    effect: PropTypes.oneOf([
      'default',
      'valid',
      'invalid',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default Key