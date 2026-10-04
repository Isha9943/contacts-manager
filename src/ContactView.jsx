import React from 'react'

export default function ContactView(props) {
  return (
    <div>
        {props.contact.email}, {props.contact.name}
        <button type="button" onClick={() => props.deleteEvent(props.contact.email)}>Delete</button>
        
    </div>
  )
}

