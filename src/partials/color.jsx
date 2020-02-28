import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Color(props) {

    const setColor = () => {
        props.setColor(props.color, props.price);
    }

    return (
        <Button variant='outline-dark' style={{ backgroundColor: props.color }} onClick={setColor}></Button>
    )
}

Color.propTypes = {
    setModel: PropTypes.func
};

export default Color;