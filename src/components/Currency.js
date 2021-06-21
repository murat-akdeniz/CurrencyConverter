import React, { useState, useEffect } from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
  width:60vw;
  height:50vh;
  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column wrap;
  align-items: center;  
  padding: 24px;`


const Label = styled.label`
  font-weight: 600;
  color: rgb(20, 30, 55)
`
const InputStyle = styled.input`
  width: 30vw;
  height: 100%;
  opacity: 1; 
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
  padding: 12px;
  color: rgb(20, 30, 55);  
`
const SelectStyle = styled.select`
  width: 30vw;
  height: 100%;
  opacity: 1; 
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0px 3px 15px;
  padding: 12px;
  color: rgb(20, 30, 55);  
`;

const Currency = (props) => {


  const { currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount,
    amount, curr, toAmount, onChangeToCurrency
  } = props


  return (
    <Wrapper>
      <form action="">
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <Label htmlFor="amount">Amount</Label>
          <InputStyle
            type="number"
            value={amount}
            onChange={onChangeAmount}
          />

          <Label htmlFor="from">From</Label>
          <SelectStyle
            value={selectedCurrency}
            onChange={onChangeCurrency}
          >
            {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}



          </SelectStyle>


          <Label htmlFor="amount">To</Label>
          <SelectStyle value={curr} onChange={onChangeToCurrency}>
            {currencyOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </SelectStyle>
          <p style={{ color: "black" }}>{toAmount}</p>

        </div>
      </form>

    </Wrapper>
  )
}
export default Currency


