import React from 'react';
import Model from './model';
import Engine from './engine';
import Gearbox from './gearbox';
import Color from './color';
import PropTypes from 'prop-types';

function Configuration(props) {

    return (
        <div className='col-xs-12 col-md-8 options-wrapper'>
            <div className='row'>
                <div className='col-12'>
                    <div>Model</div>
                    <div className='button-wrapper'>
                        {props.models.map((model) =>
                            <Model
                                key={model.name}
                                model={model.name}
                                engines_for_model={model.engine}
                                setModel={props.setModel}
                            />)}
                    </div>
                </div>
                <div className='col-12'>
                    <div>Engine</div>
                    <div className='button-wrapper'>
                        {props.engines.map((engine) =>
                            <Engine
                                key={engine.type}
                                engine={engine.type}
                                price={engine.price}
                                engines_for_model={props.engines_for_model}
                                engine_id={engine.id}
                                gearbox_for_engine={engine.gearbox}
                                setEngine={props.setEngine}
                                dollars={props.dollars}
                            />)}
                    </div>
                </div>
                <div className='col-12'>
                    <div>Gearbox</div>
                    <div className='button-wrapper'>
                        {props.gearboxes.map((gearbox) =>
                            <Gearbox
                                key={gearbox.type}
                                gearbox={gearbox.type}
                                price={gearbox.price}
                                gearbox_for_engine={props.gearbox_for_engine}
                                gearbox_id={gearbox.id}
                                setGearbox={props.setGearbox}
                            />)}
                    </div>
                </div>
                <div className='col-12'>
                    <div>Color</div>
                    <div className='button-wrapper color-button'>
                        {props.colors.map(color =>
                            <Color
                                key={color.color}
                                color={color.color}
                                price={color.price}
                                setColor={props.setColor}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

Configuration.propTypes = {
    setGearbox: PropTypes.func
};

export default Configuration;