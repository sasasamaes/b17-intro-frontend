import { Navigate } from 'react-router-dom'
import Layout from './Layout'

const ProtectedRoute = ({
  isAuth,
  redirectTo = "/login",
}) => {

  if(!isAuth) {
    return <Navigate to={redirectTo} replace/>
  }
  return <Layout />;
}

export default ProtectedRoute