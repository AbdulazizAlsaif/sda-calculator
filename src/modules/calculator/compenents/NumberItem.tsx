import React from 'react'

interface INumberItem{
  number:any
  onClick:any
}


export default function NumberItem({number,onClick}:INumberItem) {
  return (
    <button  onClick={onClick} className='numberItemContainer'>

    {number}
    
    </button>
  )
}

const defaults={
  number:1,
  onClick:(number:any)=>{
    console.log(1)
  }
}

NumberItem.defaultProps=defaults