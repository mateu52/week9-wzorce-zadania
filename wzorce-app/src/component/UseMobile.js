import { useState, useEffect } from 'react';

function UseMobile(){
    const [  x , setX ] = useState(window.innerWidth);
    const [ isMobile, setMobile ] = useState(false);
    useEffect(() => {
        const hResize = () => 
            setX(window.innerWidth);
        window.addEventListener("resize", hResize);
        if(x<1024){
            setMobile(true);
        } else {
            setMobile(false);
        }
        return () => {
            window.removeEventListener("resize", hResize);
        };    
    }, [setX] );

    
    return(
        {isMobile}
        // <div>
        //     {(isMobile) ? (
        //         <MobileNavItem />
        //     ) : (
        //         <DesktopNavItem />
        //     )}
        // </div>
    )
};

// function DesktopNavItem(){
//     return(
//         <div>
//             <AiOutlineDesktop /><h1>fsdfss</h1>
//         </div>
//     )
// }
// function MobileNavItem(){
//     return(
//         <div><ImMobile /> <h1>fsdfsdf</h1></div>
        
//     )
// }

export default UseMobile;

