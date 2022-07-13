import React from "react";
import ReactDOM from "react-dom";
import { loggedUser } from "../../redux/slice/userSlice";
import { Button } from '../Reusable/Reusable';
const Profile = (props)=>{
   return (
       <div className="">
            <div className="">
                <td>
                <div className="icon">
                   <h2>Icon</h2>
                </div>
                </td>
                <td>
                &nbsp;
                </td> 
                <td>
                <div className="names">
                   <h2>{props.user}</h2>
                </div>
                </td>
            </div><br/>
            <h2>Tickets</h2><br/>
            <div className="Coupons">
                   <Button>My Coupons</Button><br/>
                   <Button>My Public Coupons</Button>
            </div><br/>
            <div className="logout">
                <Button>Logout</Button>
            </div>
       </div>
   );
}

export default Profile