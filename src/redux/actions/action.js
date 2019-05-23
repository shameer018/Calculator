    
import * as constant from './constant'

export const add = () => {
    return {
        type: constant.ADD
    }
}

export const subtract = () => {
    return {
        type: constant.SUBTRACT
    }
}

export const divide = () => {
    return {
        type: constant.DIVIDE
    }
}

export const multiply = () => {
    return {
        type: constant.MULTIPLY
    }
}

export const input = () => {
    return {
        type: constant.INPUT_NUMBER
    }
}

export const decimal = () => {
    return {
        type: constant.INPUT_DECIMAL
    }
}

export const clear = () => {
    return {
        type: constant.CLEAR_ALL
    }
}

export const equal = () => {
    return {
        type: constant.EQUAL
    }
}