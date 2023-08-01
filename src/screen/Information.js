import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HandleBackPage, HandleLogout, UseTokenCheck } from '../services/Handle.js';

const Information = () => {
    UseTokenCheck(); // UseTokenCheck 함수를 호출하여 사용자의 로그인 여부를 확인

    const [userid, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => { // navigate가 변경될 때마다 useEffect가 실행됨.

    const userid = localStorage.getItem('userid'); 
    setUserId(userid);
  }, [navigate]);

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