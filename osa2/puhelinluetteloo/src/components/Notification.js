import React from 'react'


const Notification = ({message,messageClass}) => {

  if (message === null) {
    return null
  } else {
    return (
      <div className={messageClass}>
        <br/>
        <em>{message}</em>
      </div>
    )
  }
}

export default Notification