import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HandleBackPage, HandleLogout, UseTokenCheck } from '../services/Handle.js';

const Information = () => {
    UseTokenCheck();
//------------------------------------------------------------------------------
    const [userid, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

    const userid = localStorage.getItem('userid'); 
    setUserId(userid);
  }, [navigate]);
//------------------------------------------------------------------------------
  return (
    <div className="Information">
      <div className="InformationWrap">
      <button className='BackButton' onClick={() => HandleBackPage(navigate)}>Back</button>
      <h2>프로필</h2>
      <div className='contentWrap'>
          <label className='inputTitle'>아이디</label>
          <div className='inputWrap'>
            <p>{userid}</p>
          </div>
          <button className='bottomButton' 
                  type="submit" 
                  onClick={() => HandleLogout(navigate)}>로그아웃
          </button>
      </div>
      </div>
    </div>
  );
};

export default Information;