import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'


function DeviceList() {
  const navigate = useNavigate()


  const handleButtonClick = (ref) => {
    // Navigate to the second page with the user name as a prop.
    navigate(`/liveMap?databaseRef=${ref}`);
  };


  return (
    <>
      <div>Device List</div>

      <div className='button' onClick={() => handleButtonClick('user22')}>Device1</div>

      <div className='button' onClick={() => handleButtonClick('ehe')}>Device2</div>
   
    </>
  )
}

export default DeviceList