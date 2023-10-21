import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function DeviceList() {
  const navigate = useNavigate()


  const handleButtonClick = (ref) => {
    // Navigate to the second page with the user name as a prop.
    navigate(`/liveMap?databaseRef=${ref}`);
  };


  return (
    <>
      <div className='app__body'>
        <div>Device List</div>

        <div className='button' onClick={() => handleButtonClick('001')}>Device 001</div>

        <div className='button' onClick={() => handleButtonClick('002')}>Device 002</div>

        <div className='button' onClick={() => handleButtonClick('003')}>Device 003</div>

        <div className='button' onClick={() => handleButtonClick('004')}>Device 004</div>

        <div className='button' onClick={() => handleButtonClick('005')}>Device 005</div>

        <div className='button' onClick={() => handleButtonClick('006')}>Device 006</div>

        <div className='button' onClick={() => handleButtonClick('007')}>Device 007</div>

        <div className='button' onClick={() => handleButtonClick('008')}>Device 008</div>
      </div>
    </>
  )
}

export default DeviceList