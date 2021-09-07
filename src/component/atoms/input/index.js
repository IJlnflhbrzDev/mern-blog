import React from 'react'
import './input.scss'
const Input = (props) => {
     return (
          <div className="input-wrapper">
               <p className="label">Label</p>
               <input className="input" placeholder="form input" />
          </div>
     )
}

export default Input
