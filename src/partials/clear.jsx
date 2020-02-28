import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Clear = ({clearSummary}) => {

    const clear = () => {
        clearSummary();
    }

    return (
        <Button variant='outline-dark clear_button' onClick={clear}>Reset configuration</Button>
    )
}

Clear.propTypes = {
    setModel: PropTypes.func
};

export default Clear;