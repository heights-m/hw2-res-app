import React, { useState } from 'react'
import FacData from '../assets/Facility_Data.json'



function Reservation() {

  const [selectedFac, setSelectedFac] = useState('0');

  return (
    <div className='px-5 py-2'>
      <select className='form-select' aria-label='Facility selector' name="fac-select" id="fac-select" onChange={e => setSelectedFac(e.target.value)} value={selectedFac}>
        <option value="0">Gym</option>
        <option value="1">Auditorium</option>
        <option value="2">Swimming Pool</option>
        <option value="3">Seminar Room</option>
        <option value="4">Conference Room</option>
        <option value="5">Library</option>
      </select>
      <img src={FacData[Number(selectedFac)].Img} alt="Current facility" className='my-3 rounded w-75'/>
    </div>
  )
}

export default Reservation