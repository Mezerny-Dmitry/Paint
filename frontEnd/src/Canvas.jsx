import React, {Component} from 'react';
import "./Canvas.css";
import Circle from "./tools2/Circle";
import Line from "./tools2/Line";
import Rect from "./tools2/Rect";
import Pencil from "./tools2/Pencil"

import {connect} from 'react-redux'


class Canvas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            figure: new Pencil(),
            isFirst: true,
            itemList: []
        }

    }

    classSwitch = (arg) => {
        switch (arg) {
            case 'line':

                this.setState({
                    figure: new Line()
                });
                break;

            case 'rectangle':

                this.setState({
                    figure: new Rect()
                });
                break;

            case 'circle':

                this.setState({
                    figure: new Circle()
                });
                break;

            case 'clear':
                this.ctx.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
                this.props.setFigures(this.state.itemList);
                this.setState({
                    itemList: []
                });
                break;

            case 'pencil':
                this.setState({
                    figure: new Pencil()
                });
                break;

            default:
                break;
        }
    };

    componentDidMount() {
        this.canvas = document.getElementsByTagName('canvas');
        this.ctx = this.canvas[0].getContext('2d');

    }

    // рисуток из истории

    componentWillReceiveProps(nextProps) {
        if (nextProps.button !== this.props.button) {
            this.classSwitch(nextProps.button);
        }

        if (nextProps.select.length !== 0) {
            this.ctx.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);

            this.setState({
                itemList: []
            });

            nextProps.select.forEach((item) => {
                switch (item.type) {
                    case 'Rect':
                        new Rect(item.firstCoord, item.secondCoord, item.color, item.width).draw(this.ctx);
                        break;

                    case 'Line':
                        new Line(item.firstCoord, item.secondCoord, item.color, item.width).draw(this.ctx);
                        break;

                    case "Circle":
                        new Circle(item.firstCoord, item.secondCoord, item.color, item.width).draw(this.ctx);

                        break;

                    case "Pencil":
                        new Pencil(item.firstCoord, item.secondCoord, item.color, item.width).draw(this.ctx);

                        break;

                    default:
                        break;
                }
            })
        }

        if (nextProps.button === 'clear') {
            this.ctx.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
            if (this.state.itemList.length !== 0) {
                this.setState({
                    itemList: []
                })
            } else {
                if (this.props.select.length !== 0) {
                    this.props.setSelect([]);
                    this.props.setButton('rectangle');
                }
            }
        }
    };


    Down = (event) => {

        if (this.state.isFirst === true && this.state.figure !== null) {

            // eslint-disable-next-line
            this.state.figure.fCoord = {
                x: event.pageX - event.target.offsetLeft,
                y: event.pageY - event.target.offsetTop
            };

            this.setState({
                isFirst: false
            });

            // очистка от figures

            this.props.setSelect([]);

        }

    };

    Move = (event) => {

        if (this.state.isFirst === false) {

            switch (this.state.figure.type) {

                case 'Line':
                    // eslint-disable-next-line
                    this.state.figure.Color = this.props.color;
                    // eslint-disable-next-line
                    this.state.figure.Width = this.props.width;
                    // eslint-disable-next-line
                    this.state.figure.sCoord = {
                        x: event.pageX - event.target.offsetLeft,
                        y: event.pageY - event.target.offsetTop
                    };
                    break;
                case 'Rect':
                    // eslint-disable-next-line
                    this.state.figure.Color = this.props.color;
                    // eslint-disable-next-line
                    this.state.figure.Width = this.props.width;
                    // eslint-disable-next-line
                    this.state.figure.sCoord = {
                        x: event.pageX - (event.target.offsetLeft + this.state.figure.fCoord.x),
                        y: event.pageY - (event.target.offsetTop + this.state.figure.fCoord.y)

                    };
                    break;

                case 'Circle':
                    // eslint-disable-next-line
                    this.state.figure.Color = this.props.color;
                    // eslint-disable-next-line
                    this.state.figure.Width = this.props.width;
                    // eslint-disable-next-line
                    this.state.figure.sCoord = {
                        x: event.pageX - event.target.offsetLeft,
                        y: event.pageY - event.target.offsetTop

                    };
                    break;

                case "Pencil":
                    // eslint-disable-next-line
                    this.state.figure.Color = this.props.color;
                    // eslint-disable-next-line
                    this.state.figure.Width = this.props.width;
                    // eslint-disable-next-line
                    this.state.figure.sCoord = {
                        x: event.pageX - event.target.offsetLeft,
                        y: event.pageY - event.target.offsetTop
                    };
                    break;

                default:
                    // eslint-disable-next-line
                    this.state.figure.sCoord = {
                        x: event.pageX - (event.target.offsetLeft + this.state.figure.fCoord.x),
                        y: event.pageY - (event.target.offsetTop + this.state.figure.fCoord.y)

                    }
            }

            // отрисовка актуального

            this.ctx.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);
            this.state.figure.draw(this.ctx);


            // отрисовка старых

            if (this.state.itemList.length !== 0) {

                this.state.itemList.map((item) => {
                    return (
                        item.draw(this.ctx)
                    )
                });

            }

        }

    };

    Up = () => {

        if (this.state.isFirst === false) {

            this.setState({
                isFirst: true,
                itemList: [...this.state.itemList, this.state.figure]
            });

            this.classSwitch(this.props.button);

        }
    };

    render() {

        return (
            <canvas
                onMouseDown={this.Down}

                onMouseMove={this.Move}

                onMouseUp={this.Up}

                onMouseOut={this.Up}

            >Пожалуйста, живи</canvas>

        )
    }

}

function mapStateToProps(state) {
    return {
        select: state.select,
        button: state.button,
        color: state.color,
        width: state.width
    }
}

export default connect(mapStateToProps)(Canvas);
