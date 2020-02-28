import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Gearbox(props) {

    const setGearbox = () => {
        props.setGearbox(props.gearbox, props.price);
    }

    let fitted_gearboxes = props.gearbox_for_engine.filter(gearbox => {
        return gearbox === props.gearbox_id
    })

    if (fitted_gearboxes.length > 0) {
        return <Button variant='outline-dark' disabled={false} onClick={setGearbox}> {props.gearbox} </Button>
    } else {
        return <Button variant='outline-dark' disabled={true} onClick={setGearbox}> {props.gearbox} </Button>
    }
}

Gearbox.propTypes = {
    setGearbox: PropTypes.func
};

export default Gearbox;