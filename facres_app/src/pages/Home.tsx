import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="ps-5 pe-5">
      <ul>
        <li>
          <h2>Facility Reservation</h2>
          <ul>
            <li>
              <p>Facility List</p>
              <ol>
                <li className="mb-2">Reservation Date should be the date after today</li>
                <li className="mb-2">The number of users should be between the maximum number of people and the minimum number of people</li>
                <li className="mb-2">If the facility is available only for SUNY Korea, user should be in SUNY Korea</li>
                <li className="mb-2">The reservation daate must be made on the available day of the week</li>
                <li className="">The same person cannot book another facility on the same date</li>
                <p>If all conditions are met, data is stored in local storage</p>
              </ol>
            </li>
            <li>
              <h2>User Information</h2>
              <ol>
                <li className="mb-2">User profile, user email, user password, user name</li>
                <li className="mb-2">All other details can be modified except for the user email</li>
                <li className="mb-3">If the user profile is changed, the image in the navbar will also change</li>
              </ol>
            </li>
            <li>
              <h2>Reservation History</h2>
              <p className="mb-2">Load the reservation data stored in the local storage</p> <b/>
              <p className="mb-2">Reservation id, facility name, purpose, peopleNum, inSUNY, booker name, date</p> <b/>
              <p className="mb-3">Can cancel reservation</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Home;
