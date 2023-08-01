import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseTokenCheck = () => {

//------------------------------------------------------------------------------
  const navigate = useNavigate();
  useEffect(() => { 
    const storedJtoken = localStorage.getItem('jtoken');

    if (!!storedJtoken) {

    } else { 
      navigate('/Login', { replace: true });
    }
  }, []);
};
//------------------------------------------------------------------------------
const HandleBackPage = (navigate) => {
    navigate('/User');
};
//------------------------------------------------------------------------------
const HandleLogout = (navigate) => {
    localStorage.clear();
    navigate('/Login');
};
  
export { HandleBackPage, HandleLogout, UseTokenCheck };