function setSelect(select) {
    return ({
            type: "SET_SELECT",
            payload: select
        }
    )
}

function setFigures(figures) {
    return ({
            type: "SET_FIGURES",
            payload: figures
        }
    )
}

function setButton(button) {
    return ({
            type: "SET_BUTTON",
            payload: button
        }
    )
}

function setColor(color) {
    return ({
            type: "SET_COLOR",
            payload: color
        }
    )
}

function setWidth(width) {
    return ({
            type: "SET_WIDTH",
            payload: width
        }
    )
}

export {setButton, setColor, setFigures, setSelect, setWidth};