import { Navigate } from 'react-router-dom';
import { loggedUser } from '../../redux/slice/userSlice';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {

    const user = useSelector(loggedUser)

  if (user.length === 0) {
    return <Navigate to="/login" />
  }
  return children;
};

export default ProtectedRoute;