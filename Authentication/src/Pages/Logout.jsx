import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Provider/UserProvider';
import Swal from 'sweetalert2';

const LogoutButton = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser')
        
    if(localStorage.removeItem('Password') &&
        localStorage.removeItem('Email')){
        Swal.fire(
            {
                text: "Logout Successfull"
            }
        )
    }
    navigate("/");
  };

  return (
    <button className='p-2 text-white font-bold rounded bg-green-400 hover:bg-green-600 ' onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
