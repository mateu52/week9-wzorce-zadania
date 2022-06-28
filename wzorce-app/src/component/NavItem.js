
import React from 'react';
import UseMobile from './UseMobile';
import { AiOutlineDesktop } from "react-icons/ai";
import { ImMobile } from "react-icons/im";


function DesktopNavItem(){
    return(
        <div>
            <AiOutlineDesktop /><h5>desktopowe</h5>
        </div>
    )
}
function MobileNavItem(){
    return(
        <div><ImMobile /> <h5>mobilne</h5></div>
        
    )
}

function NavItem(){
    const {isMobile} = UseMobile();
    return(
        <div>
            {(isMobile===true) ? (
                <MobileNavItem />
            ) : (
                <DesktopNavItem />
            )}
        </div>
    )
}

export default NavItem;