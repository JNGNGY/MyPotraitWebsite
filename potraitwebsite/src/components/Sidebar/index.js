import React from 'react';
import {FaTimes} from 'react-icons/fa';
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="SidebarContainer">
           <div className="Icon">
              <FaTimes /> 
            </div> 
            <div className="SidebarWrapper">
                <div className="SidebarMenu">
                    <div className="SidebarLink">
                        About Me
                    </div>
                    <div className="SidebarLink">
                        Experience
                    </div>
                    <div className="SidebarLink">
                        Skills
                    </div>
                    <div className="SidebarLink">
                        FreeTime
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
