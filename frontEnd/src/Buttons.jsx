import React, {Component} from 'react';
import "./Buttons.css"

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'pencil'
        }

    }

    handleClick = (event) => {
        event.preventDefault();

        this.props.setButton(event.target.name);

        if (event.target.name === 'clear') {
            setTimeout(() => {
                this.props.setButton('rectangle');
                this.setState({
                    active: 'rectangle'
                })
            })
        }

        this.setState({
            active: event.target.name
        })

    };

    colorChange = (event) => {
        this.props.setColor(event.target.value);

    };

    widthChange = (event) => {
        this.props.setWidth(event.target.value);
    };

    render() {
        return (
            <div className="Buttons">
                <div className="tools">
                    <button onClick={this.handleClick} className={this.state.active === 'line' ? 'active' : ''}
                            name="line">Line
                    </button>
                    <button onClick={this.handleClick} className={this.state.active === 'rectangle' ? 'active' : ''}
                            name="rectangle">Rectangle
                    </button>
                    <button onClick={this.handleClick} className={this.state.active === 'circle' ? 'active' : ''}
                            name="circle">Circle
                    </button>
                    <button onClick={this.handleClick} className={this.state.active === 'pencil' ? 'active' : ''}
                            name="pencil">Pencil
                    </button>
                </div>
                <hr/>
                <div className='settings'>
                    <input onChange={this.colorChange} type="color"/>
                    <input onChange={this.widthChange} type="range" min='0.5' step='0.5' defaultValue='1' max='20'/>
                </div>
                <hr/>
                <button onClick={this.handleClick} className={this.state.active === 'clear' ? 'active clear' : 'clear'}
                        name="clear">Clear
                </button>
            </div>
        )
    }
}

export default Buttons;