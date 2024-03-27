import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import "./User.css"
import { Link } from  "react-router-dom"

function User() {
  return (
    <div className='user'>
     <div className='userTitleContainer'>
      <h1 className='userTitle'>Edit User</h1>
      
   
      <Link to="/newUser" className='link_part'> <button className='userAddButton'> 
      Create 
      </button></Link>
    

     </div>
     <div className='userContainer'>
      <div className='userShow'>
      <div className='userShowTop'>
      <img src='https://i.seadn.io/gae/PTIvyNEFSwpiBA-Kv7ZTRNGzBOOxMzIW59q5vX02Ml911J4_Y5UwfooDhE6oQrULV0M5YODgqWkr6W4o19bxLY2qXCJuDhJ8Y4uObg?auto=format&dpr=1&w=1000' alt=''
       className='userShowImg' />

       <div className='userShowTopTitle'>
       <span className='userShowUsername'>Anna Keller</span>
              <span className='userShowTitle'>Software Engineer</span>

       </div>
          
      </div>
      <div className='userShowBottom'>
        <span className='userShowTitle'>Account Details</span>
        <div className='userShowInfo'>
        <PersonIcon className='userShowIcon' />
        <span className='userShowInfoTitle'>annabaeck99</span>
        
        </div>
        <div className='userShowInfo'>
        <AttachMoneyIcon className='userShowIcon' />
        <span className='userShowInfoTitle'>10.9</span>
        
        </div>
        <span className='userShowTitle'>Contacts Details</span>
        <div className='userShowInfo'>
        <LocalPhoneIcon className='userShowIcon' />
        <span className='userShowInfoTitle'>+12 123 456</span>
        
        </div>
        <div className='userShowInfo'>
        <EmailIcon className='userShowIcon' />
        <span className='userShowInfoTitle'>ge@gmail.com</span>
        
        </div>

        <div className='userShowInfo'>
        <ApartmentIcon  className='userShowIcon' />
        <span className='userShowInfoTitle'>Ethiopia</span>
        
        </div>

      </div>

      </div>
      <div className='userUpdate'>
        <span className='userUpdateTitle'>Edit</span>
        <form className='userUpdateForm'>
          <div className='userUpdateLeft'>


            <div className='userUpdateItem'>
              <label>Username</label>
              <input type="text" placeholder='annabeck99'
               className='userUpdateInput' />
            </div>
            <div className='userUpdateItem'>
              <label>Full Name</label>
              <input type="text" placeholder='annabe kebe'
               className='userUpdateInput' />
            </div>
            <div className='userUpdateItem'>
              <label>Email</label>
              <input type="text" placeholder='kebe@gmail.com'
               className='userUpdateInput' />
            </div>
            <div className='userUpdateItem'>
              <label>Phone</label>
              <input type="text" placeholder='+34232343'
               className='userUpdateInput' />
            </div>
            <div className='userUpdateItem'>
              <label>Addiress</label>
              <input type="text" placeholder='Ethiopia'
               className='userUpdateInput' />
            </div>


          </div>

          <div className='userUpdateRight'>
            <div className='userUpdateUpload'>
            <img src='https://i.seadn.io/gae/PTIvyNEFSwpiBA-Kv7ZTRNGzBOOxMzIW59q5vX02Ml911J4_Y5UwfooDhE6oQrULV0M5YODgqWkr6W4o19bxLY2qXCJuDhJ8Y4uObg?auto=format&dpr=1&w=1000' alt=''
       className='userUpdateImg' />
       <label htmlFor='file'><FileUploadIcon className='userUpdateIcon' /></label>
              <input type="file" id='file'  style={{display:"none"}}/>

            </div>
            <button className='userUpdateButton'>Update</button>

          </div>

        </form>
      </div>

     </div>
    </div>
  )
}

export default User
