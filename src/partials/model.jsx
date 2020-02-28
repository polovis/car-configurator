import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Model(props) {
    
    const setModel = (e) => {
        props.setModel(props.model, props.engines_for_model);
    }

    return (
        <Button variant='outline-dark' onClick={setModel}> {props.model} </Button>
    )
}

Model.propTypes = {
    setModel: PropTypes.func
};

export default Model;