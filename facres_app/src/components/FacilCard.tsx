import React from 'react'
import '/src/components/FacilCard.css'

interface Props {
    imgLink: string;
    facName: string;
    desc: string;
    days: string;

}

function FacilCard() {
  return (
    <div className='bg-white p-3 rounded flex justify-content-center align-items-center m-2' id='fac_card'>
        <img src="/src/assets/gym.jpg" alt="" className='rounded w-100 mb-4' id='fac_card_img'/>
        <div id='fac_card_details' className=''>
            <h3>Gym</h3>
            <p>place used for physical activity</p>
            <div id="fac_card_desc_box">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/></svg>

            </div>
        </div>
    </div>
  )
}

export default FacilCard