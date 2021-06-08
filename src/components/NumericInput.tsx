import React from 'react'

export const NumericInput = ({ onChange, ...props }) => {
  const wrappedOnChange = (e) => {
    const { value } = e.target
    if (!isNaN(Number(value))) {
      onChange(e)
    }
  }
  return (
    <input className='form-control' {...props} onChange={wrappedOnChange} />
  )
}
