import React from 'react'
import '/src/pages/UserInfo.css'

function UserInfo() {
  return (
    <div className='justify-content-center text-center'>
      <h1>User Information</h1>

      {/* profile image changer elements */}
      <img id='profile_picture' src="/src/assets/user.png" alt="profile icon"/>
      <br />
      <button type='button' className='btn btn-outline-dark mt-4' data-bs-toggle='modal' data-bs-target='#img_modal'>Change Image</button>
      
      <div className="modal fade" id="img_modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Change your image</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-start">
            <label htmlFor="inputImgFile" className='form-label'>New Image</label>
            <input type="file" name="inputImgFile" id="inputImgFile" className='form-control'/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <p className="user-profile-content">Email: abc@stonybrook.edu</p>

    {/* user password changer elements */}
    <div>
      <label htmlFor="currentPw">Password:</label>
      <input className='bg-light border-0 ms-2' type="password" name="currentPw" id="currentPw" placeholder='*********'/>
    </div>

    <button type='button' className='btn btn-outline-dark mt-4' data-bs-toggle='modal' data-bs-target='#pw_modal'>Change Password</button>
      
      <div className="modal fade" id="pw_modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Change your password</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-start">
            <label htmlFor="inputNewPw" className='form-label'>New Password</label>
            <input type="password" name="inputNewPw" id="inputNewPw" className='form-control' placeholder='Enter the new password'/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    {/* user name changer elements */}
    <div className='user-profile-content d-flex justify-content-center'>
      <p>Name:</p>
      <p className='ms-2'>John Doe</p>
    </div>
    
    <button type='button' className='btn btn-outline-dark mb-4' data-bs-toggle='modal' data-bs-target='#name_modal'>Change Name</button>
      
      <div className="modal fade" id="name_modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Change your name</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-start">
            <label htmlFor="inputNewName" className='form-label'>New Name</label>
            <input type="text" name="inputNewName" id="inputNewName" className='form-control' placeholder='Enter the new name'/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default UserInfo