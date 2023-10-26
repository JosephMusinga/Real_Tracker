import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { getAlertFromDatabase } from './FirebaseSetup'


function Home() {
  const navigate = useNavigate()
  getAlertFromDatabase()

  return (
    <>
      <div className='home__header'>Home</div>
      <div className='body'>
        <div className='button__column'>
          <div className='button' onClick={() => navigate('/deviceList')}>Devices
          </div>

        </div>

      </div>
    </>
  )
}

export default Home 