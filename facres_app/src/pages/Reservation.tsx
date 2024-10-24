import React, { useState } from 'react'
import FacData from '../assets/Facility_Data.json'



function Reservation() {

  const [selectedFac, setSelectedFac] = useState('0');
  const [inputDate, setInputeDate] = useState();

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
      <div className='d-flex justify-content-left align-items-center my-3 bg-white bg-opacity-50 rounded-4'>
        <img src={FacData[Number(selectedFac)].Img} alt="Current facility" className='rounded-4 w-50 ms-2'/>
        <div className='ms-3 mt-2'>
          <h2>{FacData[Number(selectedFac)].Name}</h2>
          <p>{FacData[Number(selectedFac)].Desc}</p>
          <svg className='float-start me-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/></svg>
          <p>{FacData[Number(selectedFac)].Days}</p>
          <svg className='float-start me-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>
          <p>{FacData[Number(selectedFac)].Location}</p>
          <svg className='float-start me-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z"/></svg>
          <p>{FacData[Number(selectedFac)].Participants[0]} - {FacData[Number(selectedFac)].Participants[1]}</p>
          <svg className='float-start me-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9l-70 70q-11-2-21.5-2H400q-71 0-127.5 17T180-306q-9 5-14.5 14t-5.5 20v32h250l80 80H80Zm542 16L484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm10 240Zm-10-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Z"/></svg>
          <p>{FacData[Number(selectedFac)].Available}</p>
        </div>
      </div>
      <form action="#">
        <label htmlFor="datetbu">Date to be Used:</label>
        <input type="date" className='form-control' required/>
        <div className='mt-2'>
          <label htmlFor="numppl">Number of People:</label>
          <input type="number" name="numppl" id="numppl" className='form-control' />
        </div>
        <div className="form-check form-check-inline mt-2">
          <input type="radio" className='form-check-input' name='afil' id='afil-yes' required/>
          <label htmlFor="afil-yes">SUNY Korea</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" className='form-check-input' name='afil' id='afil-no'/>
          <label htmlFor="afil-no">Non-SUNY Korea</label>
        </div>
        <div className='mt-2'>
          <label htmlFor="purpose">Purpose of Use:</label>
          <textarea name="purpose" id="purpose" className='form-control'></textarea>
        </div>
        <button type='submit' className='btn my-3 btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default Reservation