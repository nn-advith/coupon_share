import { Navigate } from 'react-router-dom';
import { loggedUser } from '../../redux/slice/userSlice';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {

    const user = useSelector(loggedUser)

  if (user === null) {
    return <Navigate to="/login" />
  }
  else
  return children;
};

export default ProtectedRoute;