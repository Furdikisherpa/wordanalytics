import React from 'react'

export default function Warning({showWarning, message}) {
    if(!showWarning) return null;
    
  return <p className='warning'>No {message} is allowed</p>
}
