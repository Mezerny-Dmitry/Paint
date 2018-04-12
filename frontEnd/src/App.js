import React, {Component} from 'react';
import './App.css';
import Buttons from "./Buttons";
import Canvas from "./Canvas";
import Info from "./Info";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as pageActions from './redux/actions/actions'

import post from './functions/post';


class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.figures.length !== 0 && nextProps.figures[0].length !== 0) {

            post(nextProps.figures, nextProps.pageActions.setFigures)
        }
    }

    render() {

        return (

            <div className="container">

                <Info
                    setSelect={this.props.pageActions.setSelect}
                />

                <Canvas
                    setFigures={this.props.pageActions.setFigures}
                    setButton={this.props.pageActions.setButton}
                    setSelect={this.props.pageActions.setSelect}
                />

                <Buttons
                    setButton={this.props.pageActions.setButton}

                    setWidth={this.props.pageActions.setWidth}

                    setColor={this.props.pageActions.setColor}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        figures: state.figures,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
