import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function Engine(props) {

    const setEngine = () => {
        props.setEngine(props.engine, props.price, props.gearbox_for_engine);
    }

    let fitted_engines = props.engines_for_model.filter(engine => {
        return engine === props.engine_id
    })

    if (fitted_engines.length > 0) {
        return <Button variant="outline-dark" disabled={false} onClick={setEngine}> {props.engine} </Button>
    } else {
        return <Button variant="outline-dark" disabled={true} onClick={setEngine}> {props.engine} </Button>
    }
}

Engine.propTypes = {
    setEngine: PropTypes.func
};

export default Engine;