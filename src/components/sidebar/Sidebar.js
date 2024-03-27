import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import MovingIcon from '@mui/icons-material/Moving';

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebarWrapper'>

      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Dashboard</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon' />
            Home

          </li>
          <li className='sidebarListItem'>
            <TimelineIcon className='sidebarIcon'/>
            Analytics

          </li>
          <li className='sidebarListItem'>
            <MovingIcon className='sidebarIcon'/>
            Sales

          </li>
        

        </ul>

      </div>

      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Quick Menu</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon' />
            Users

          </li>
          <li className='sidebarListItem'>
            <TimelineIcon className='sidebarIcon'/>
            Porducts

          </li>
          <li className='sidebarListItem'>
            <MovingIcon className='sidebarIcon'/>
            Transactions

          </li>
          <li className='sidebarListItem'>
            <MovingIcon className='sidebarIcon'/>
            Reports

          </li>
        

        </ul>

      </div>

      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Notifications</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon' />
            Mail

          </li>
          <li className='sidebarListItem'>
            <TimelineIcon className='sidebarIcon'/>
            Feedback

          </li>
          <li className='sidebarListItem'>
            <MovingIcon className='sidebarIcon'/>
            Message

          </li>
        

        </ul>

      </div>

      <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Staff</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon' />
            Manage

          </li>
          <li className='sidebarListItem'>
            <TimelineIcon className='sidebarIcon'/>
            Analytics

          </li>
          <li className='sidebarListItem'>
            <MovingIcon className='sidebarIcon'/>
            Reports

          </li>
        

        </ul>

      </div>

     </div>
      
    </div>
  )
}

export default Sidebar
