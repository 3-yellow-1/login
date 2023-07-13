const HandleLogout = (navigate) => {
    localStorage.removeItem('jtoken');
    localStorage.removeItem('userid');
    navigate('/Login');
  };
  
export default HandleLogout;