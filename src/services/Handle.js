
const HandleBackPage = (navigate) => {
    navigate('/UserList');
};

const HandleLogout = (navigate) => {
    localStorage.clear();
    // localStorage.removeItem('jtoken');
    // localStorage.removeItem('userid');
    navigate('/Login');
};
  
