import React from 'react'
import '../../../styles.scss'
interface ICalculatorContainer{
  children:JSX.Element | JSX.Element[]
  
}

export default function CalculatorContainer({children}:ICalculatorContainer) {
  return (
    <div className='calculatorContainer'>
      {children}
    </div>
  )
}
