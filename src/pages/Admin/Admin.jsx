import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import AdminTemp from "../../components/AdminTemp/AdminTemp";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = JSON
    .parse(localStorage.getItem('admin'));
  
    if (!admin) { navigate('/login') }
  }, [navigate]);

  return (
    <>
      <AdminTemp />
    </>
  )
}

export default Admin