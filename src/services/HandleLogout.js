
const HandleLogout = (navigate) => {
    localStorage.clear();
    // localStorage.removeItem('jtoken');
    // localStorage.removeItem('userid');
    navigate('/Main');
  };
  
export default HandleLogout;