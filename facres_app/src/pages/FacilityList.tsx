import React from 'react'
import FacilCard from '../components/FacilCard'

function FacilityList() {
  return (
    <div className='px-5 py-2 d-flex justify-content-center container-fluid flex-wrap'>
      <FacilCard/>
      <FacilCard/>
    </div>
  )
}

export default FacilityList