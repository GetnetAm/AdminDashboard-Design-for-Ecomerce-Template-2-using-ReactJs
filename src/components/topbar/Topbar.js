import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LanguageIcon from '@mui/icons-material/Language';
import "./Topbar.css"
function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Dashboard_A</span>

            </div>

            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <AddAlertIcon />
                    <span className='topIconBag'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon />
                    <span className='topIconBag'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsSuggestIcon />
                   
                </div>
                <img src='https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg' alt='' className='TopAvater' />

            </div>

        </div>
      
    </div>
  )
}

export default Topbar
