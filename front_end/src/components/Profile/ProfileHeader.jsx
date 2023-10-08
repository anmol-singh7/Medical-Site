import React from "react";
import { AiOutlineBell, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai';
import { MdMailOutline } from 'react-icons/md';
const ProfileHeader =({active})=>{
    
    return(
        <div style={{display:'flex',justifyContent:'space-between'}}> 
            <div className="w-[30%] relative">
                <input
                    type="text"
                    placeholder="Search..."
                    // value={searchTerm}
                    // onChange={handleSearchChange}
                    className="h-[40px] w-full px-2  rounded-md"
                    style={{marginLeft:'10px',paddingLeft:'2vw'}}
                />
                <div className="absolute right-2 top-1.5 cursor-pointer"  style={{ backgroundColor: 'rgb(37,94,214)', borderRadius: '5px', height:'30px',width:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
                <AiOutlineSearch
                    size={25}
                    // className="absolute right-2 top-1.5 cursor-pointer"
                  
                />
                </div>

               
            </div>
             <div style={{display:'flex'}}>
                <div style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor:'rgb(37,94,214)', display:'flex',justifyContent:'center',alignItems:'center',margin:'10px'}}>
                    <AiOutlineBell size={30} color={active === 1 ? "rgb(37,94,214)" : "white"} /> 
                </div>
                <div style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: 'rgb(37,94,214)', display: 'flex', justifyContent: 'center', alignItems: 'center',margin:'10px' }}>
                    <MdMailOutline size={30} color={active === 1 ? "rgb(37,94,214)" : "white"} />
                </div>
                <div></div>
             </div>
        </div>
    )
}
 export default ProfileHeader;