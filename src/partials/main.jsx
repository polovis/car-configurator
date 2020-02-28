import React from 'react';
import Summary from './summary';
import Configuration from './configuration';
import Clear from './clear';
import Currency from './currency';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
            engines: [],
            gearboxes: [],
            colors: [],
            model: '',
            engine: '',
            gearbox: '',
            color: '',
            enginePrice: '',
            gearboxPrice: '',
            colorPrice: '',
            engines_for_model: [],
            gearbox_for_engine: [],
            currency: '',
            dollars: undefined
        }

    }

    componentDidMount() {
        fetch(`http://localhost:3001/cars`)
            .then(res => res.json())
            .then((cars) => {
                this.setState({
                    models: cars.model,
                    engines: cars.engine,
                    gearboxes: cars.gearbox,
                    colors: cars.colors
                });
            })
            .catch(err => console.log(err)
            );
    }

    setModel = (currentModel, engines_for_model, style) => {
        this.setState({
            model: currentModel,
            engine: '',
            gearbox: '',
            color: '',
            enginePrice: 0,
            gearboxPrice: 0,
            colorPrice: 0,
            engines_for_model: engines_for_model,
            currency: '',
            dollars: undefined
        });
    }

    setEngine = (currentEngine, price, gearbox_for_engine) => {
        this.setState({
            engine: currentEngine,
            enginePrice: price,
            gearbox_for_engine: gearbox_for_engine,
            currency: '$',
            dollars: undefined
        });
    }

    setGearbox = (currentGearbox, price) => {
        this.setState({
            gearbox: currentGearbox,
            gearboxPrice: price
        });
    }

    setColor = (currentColor, price) => {
        this.setState({
            currency: '$',
            color: currentColor,
            colorPrice: price
        })
    }

    clearSummary = () => {
        this.setState({
            model: '',
            engine: '',
            gearbox: '',
            color: '',
            enginePrice: '',
            gearboxPrice: '',
            colorPrice: '',
            dollars: undefined,
            currency: ''
        });
    }

    changeCurrency = () => {
        this.setState({
            dollars: !this.state.dollars
        }, () => {
            if (this.state.dollars) {
                this.setState({
                    enginePrice: Math.round(this.state.enginePrice * 1.5),
                    gearboxPrice: Math.round(this.state.gearboxPrice * 1.5),
                    colorPrice: Math.round(this.state.colorPrice * 1.5),
                    currency: '€'
                })

            } else if (!this.state.dollars) {
                this.setState({
                    enginePrice: Math.round(this.state.enginePrice / 1.5),
                    gearboxPrice: Math.round(this.state.gearboxPrice / 1.5),
                    colorPrice: Math.round(this.state.colorPrice / 1.5),
                    currency: '$'
                })
            }
        })
    }

    render() {

        return (
            <div className='row configuration-wrapper'>
                <Configuration
                    models={this.state.models}
                    engines={this.state.engines}
                    gearboxes={this.state.gearboxes}
                    colors={this.state.colors}
                    setModel={this.setModel}
                    setEngine={this.setEngine}
                    setGearbox={this.setGearbox}
                    setColor={this.setColor}
                    engines_for_model={this.state.engines_for_model}
                    gearbox_for_engine={this.state.gearbox_for_engine}
                />

                <Summary
                    model={this.state.model}
                    engine={this.state.engine}
                    gearbox={this.state.gearbox}
                    color={this.state.color}
                    enginePrice={this.state.enginePrice}
                    gearboxPrice={this.state.gearboxPrice}
                    colorPrice={this.state.colorPrice}
                    currency={this.state.currency}
                />
                <div className='col-xs-12 col-md-8 clear-button-wrapper'>
                    <Clear clearSummary={this.clearSummary} />
                    <Currency changeCurrency={this.changeCurrency} />
                </div>
            </div>

        )
    }
}

export default Main;
