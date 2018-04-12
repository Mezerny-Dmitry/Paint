import React, {Component} from 'react';
import './Info.css';

import get from './functions/get';
import getDate from './functions/getDate';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: []
        };
    };

    Select = (event) => {
        event.preventDefault();
        this.props.setSelect(this.state.history[event.target.id]);
    };


    render() {
        return (<div>

                <div className='history'>
                    <div className='hContainer'>
                        {
                            this.state.history.map((item, index) => {

                                    if (item.length !== 1) {

                                        return (
                                            <div className='hItem' key={index} id={index} onClick={this.Select}>
                                                figure
                                                <br/>
                                                {getDate(item[0].date)}
                                            </div>
                                        )

                                    } else {

                                        return (
                                            <div className='hItem' key={index} id={index} onClick={this.Select}>
                                                {item[0].type}
                                                <br/>
                                                {getDate(item[0].date)}
                                            </div>
                                        )
                                    }
                                }
                            )}


                    </div>
                    <button onClick={() => get(this)} className='hTaker'>Get a history</button>
                </div>
            </div>
        )
    }

}

export default Info;