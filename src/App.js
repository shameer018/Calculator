    
import React, { Component } from 'react'
import './App.scss'

import Button from './button/button'
import Display from './display/display'
import CalculatorMethods from './calculator/CalculatorMethod'

import { connect } from 'react-redux'
import * as action from './redux/actions/action'

const calculator = new CalculatorMethods()

class App extends Component {

  render() {
    return (
      
      <div className="case">
        <div id="screen">
          <Display display={this.props.expression} />
          <Display display={this.props.value} />
        </div>

        <div className="keypad">
          <Button func={this.props.onClickAdd} id="add" icon="+" />
          <Button func={this.props.onClickSubtract} id="subtract" icon="-" />
          <Button func={this.props.onClickMultiply} id="multiply" icon="x" />
          <Button func={this.props.onClickDivide} id="divide" icon="/" />
    
          <Button func={this.props.onClickInput} id="one" icon="1" />
          <Button func={this.props.onClickInput} id="two" icon="2" />
          <Button func={this.props.onClickInput} id="three" icon="3" />

          <Button func={this.props.onClickInput} id="four" icon="4" />
          <Button func={this.props.onClickInput} id="five" icon="5" />
          <Button func={this.props.onClickInput} id="six" icon="6" />

          <Button func={this.props.onClickInput} id="seven" icon="7" />
          <Button func={this.props.onClickInput} id="eight" icon="8" />
          <Button func={this.props.onClickInput} id="nine" icon="9" />
          <Button func={this.props.onClickInput} id="zero" icon="0" />

          <Button func={this.props.onClickDecimal} id="decimal" icon="." />
          <Button func={this.props.onClickClear} id="clear" icon="AC" />
          <Button func={this.props.onClickEqual} id="equals" icon="=" />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClickAdd: () => dispatch(action.add()),
  onClickSubtract: () => dispatch(action.subtract()),
  onClickMultiply: () => dispatch(action.multiply()),
  onClickDivide: () => dispatch(action.divide()),
  onClickInput: (e) => {
    calculator.inputNumber(e.target.value)
    calculator.getValue()
    dispatch(action.input())
  },
  onClickClear: () => dispatch(action.clear()),
  onClickDecimal: () => dispatch(action.decimal()),
  onClickEqual: () => dispatch(action.equal())
})

const mapStateToProps = (state) => ({
  value: state.value,
  expression: state.expression
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
