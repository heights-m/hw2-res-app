import React from 'react'
import FacilCard from '../components/FacilCard'
import FacData from '../assets/Facility_Data.json'

function FacilityList() {
  return (
    <div className='px-5 py-2 d-flex justify-content-center container-fluid flex-wrap'>
      {FacData.map((fac) => (
          <FacilCard facName={fac.Name} desc={fac.Desc} days={fac.Days} particip={fac.Participants} location={fac.Location} avail={fac.Available} imgSrc={fac.Img} />
      ))}
    </div>
  )
}

export default FacilityList