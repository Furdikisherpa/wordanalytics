import React from 'react'

export default function Warning({showWarning, Message}) {
    if(!showWarning) return null;
    
  return <p className='warning'>No {Message} is allowed</p>
}
