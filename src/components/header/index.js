import React from 'react'
import GDriveLogo from '../../media/google-drive-icon.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Apps } from '@material-ui/icons';
import '../../styles/Header.css'
const index = ({userPhoto}) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="" height="100px"/>
                <span> Drive </span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search in Drive" />
                    <ExpandMoreIcon />

                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="User Photo" />
                
            </div>
        </div>
    )
}

export default index
