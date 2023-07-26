import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => { 
    const storedJtoken = localStorage.getItem('jtoken');
    if (!!storedJtoken) {

    } else { 
      navigate('/Login', { replace: true });
    }
  }, []);
};

export default UseTokenCheck;