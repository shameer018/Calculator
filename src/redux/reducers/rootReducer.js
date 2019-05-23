import * as constant from '../actions/constant'
import CalculatorMethods from '../../calculator/CalculatorMethod'

const initialState = {
    value: '',
    expression: ''
}

const calculator = new CalculatorMethods()

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case constant.ADD:
            calculator.add()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case constant.MULTIPLY:
            calculator.multiply()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case constant.DIVIDE: 
            calculator.divide()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case constant.SUBTRACT:
            calculator.subtract()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case constant.INPUT_NUMBER:
            return {
                    ...state,
                    value: calculator.getValue()
                }

        case constant.INPUT_DECIMAL:
            calculator.inputDecimal()
            return {
                    ...state,
                    value: calculator.getValue().toString()
                }

        case constant.CLEAR_ALL:
            calculator.clearAll()
            return {
                    ...state,
                    value: calculator.getValue(),
                    expression: calculator.getExpression().toString()
                }

        case constant.EQUAL:
            calculator.equals()
            return {
                    ...state,
                    value: calculator.getValue(),
                    expression: calculator.getExpression().toString()
                }

        default:
            return state
    }
}

export default rootReducer