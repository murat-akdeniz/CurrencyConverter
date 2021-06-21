import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const InputContainerStyle = styled.div`
  margin: 1rem 0;

`
const Span = styled.span`
  width: 100%;
  height: 100%;
  opacity: 1;  
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
  padding: 12px;
  color: rgb(20, 30, 55);  
`
const InputContainer = (props) => {


  const [input, setInput] = useState();

  const inputFocusHandler = (e) => {
    setInput(e.target.value = null)

  }
  const onChangeAmount = (e) => {
    setInput(e.target.value)

  }

  return (
    <InputContainerStyle>
      <Span>
        <label>$</label>
        <input
          type="number"
          style={{ outline: 'none', border: 'none' }}
          value={props.defaultValue ? props.defaultValue : input}
          onFocus={inputFocusHandler}
          onChange={onChangeAmount}
        />
      </Span>
    </InputContainerStyle>
  )
}
export default InputContainer
InputContainer.propTypes = {
  value: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,

}
