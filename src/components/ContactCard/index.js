import React from 'react';
import './styles.css';
function ContactCard({item}) {
  return (
    <div className='cardWrapper'>
    <div>{item?.name}</div>
    <div>{item?.email}</div>
    <div>{item?.age}</div>
    <div>{item?.mobile}</div>
    </div>
  )
}

export default ContactCard