import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loggedUser, setLoggedUser } from "../../redux/slice/userSlice";
import { Button } from '../Reusable/Reusable';



const Profile = ()=>{

    const user = useSelector(loggedUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(setLoggedUser(null));
      navigate("/");
    }
  

   return (
       <div className="">
            <div className="">

                <div className="icon">
                   <h2>Icon</h2>
                </div>
                &nbsp;
                <div className="names">
                   <h2>{user.name}</h2>
                   <h2>{user.id}</h2>
                  
                </div>

            </div><br/>
            <h2>Tickets</h2>
            <h3>{user.tickets}</h3>
            <br/>
            <div className="Coupons">
            <Link to="mycoupons" >
                <Button>My Coupons</Button>
            </Link>
            <br/>
            <Link to="mypc" >
                <Button>My Public Coupons</Button>
            </Link>
            
            </div><br/>
            <div className="logout">
                <Button onClick={handleLogout}>Logout</Button>
            </div>
       </div>
   );
}

export default Profile