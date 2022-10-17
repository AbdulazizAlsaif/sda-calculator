import React, { useState } from 'react'
import CalculatorContainer from './CalculatorContainer'
import NumberItem from './NumberItem'
const mexp = require('math-expression-evaluator');

export default function CalculatorWrapper() {

  const [text,setText]=useState<string>("")
  const [error,setError]=useState<string>("")

  const appendToText=(text: string)=>{
    setText(prev=>prev+text)
  }

  const deleteToText=()=>{
    if(text.length>0)
    setText(text.substring(0,text.length-1))
  }

  const equalOnClick=()=>{
  try{
    setText(mexp.eval(text))
    setError('')
  }
  catch(err:any){
    setError(err.message)}
  }
  
  const resetOnClick=()=>{
    setText('')
    setError('')
  }

  return (
    <div className='container'>
      <div style={error.length>0?errorStyle:{}}>
{error}
        </div>
       <div style={textStyle}>
        {text}
       
        </div>
    <CalculatorContainer>
      <NumberItem number={1} onClick={()=>appendToText("1")}/>
      <NumberItem number={2} onClick={()=>appendToText("2")}/>
      <NumberItem number={3} onClick={()=>appendToText("3")}/>
      <NumberItem number={4} onClick={()=>appendToText("4")}/>
      <NumberItem number={5} onClick={()=>appendToText("5")}/>
      <NumberItem number={6} onClick={()=>appendToText("6")}/>
      <NumberItem number={7} onClick={()=>appendToText("7")}/>
      <NumberItem number={8} onClick={()=>appendToText("8")}/>
      <NumberItem number={9} onClick={()=>appendToText("9")}/>
      <NumberItem number={0} onClick={()=>appendToText("0")}/>
      <NumberItem number={"+"} onClick={()=>appendToText("+")}/>
      <NumberItem number={"-"} onClick={()=>appendToText("-")}/>
      <NumberItem number={"/"} onClick={()=>appendToText("/")}/>
      <NumberItem number={"*"} onClick={()=>appendToText("*")}/>
      <NumberItem number={"^"} onClick={()=>appendToText("^")}/>
      <NumberItem number={"RESET"} onClick={()=>resetOnClick()}/>
      <NumberItem number={"="} onClick={()=>equalOnClick()}/>
      <NumberItem number={"<"} onClick={()=>deleteToText()}/>
    </CalculatorContainer>
    </div>
  )

  }

  const errorStyle={
        
    color:'red' ,
    borderWidth: 5,
    borderStyle:'solid',
    width:'35%',
    height:'8%',
    paddingLeft:10,
    borderColor:'red'
    
    }

    const textStyle={
      margin:10,
      color:'gray' ,
      borderWidth: 5,
      borderStyle:'solid',
      paddingInline:60,
      borderColor:'gray',
      width:'35%',
      height:'8%'
      }