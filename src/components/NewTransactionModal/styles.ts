import styled from "styled-components";
import {darken, transparentize} from 'polished'


export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    &&::placeholder{
      color: #969CB3;
    }

    & + input{ //A partir do segundo input aplica isso
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover{
      filter: saturate(0.8);
      border: 1px solid black;
    }
  }

`


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean,
  activeColor: 'green' | 'red',
}
const color ={
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive
     ? transparentize(0.9,color[props.activeColor])
     : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.2s;

    &:hover{
      border-color: ${darken(0.1, '#d7d7d7')};  //#aaa;

    }

    img{
      height: 20px;
      width: 20px;
    }

    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`