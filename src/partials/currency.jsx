import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Currency = ({changeCurrency}) => {

    const change = () => {
        changeCurrency();
    }

    return (
        <Button variant='outline-dark' onClick={change}>Change currency</Button>
    )
}

Currency.propTypes = {
    setModel: PropTypes.func
};

export default Currency;