import React from 'react'
import "./Contact.css"

const Contact = ({ label, type, name, value, onChange, placeholder}) => {
  return (
    <div >
     <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} className='contact_inputfield' />
    </div>
  )
}

export default Contact