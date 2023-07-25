import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleLogout from '../services/HandleLogout';
import HandleBackPage from '../services/HandleBackPage';
import UseTokenCheck from '../services/UseTokenCheck';

const Information = () => {
    UseTokenCheck();
    
    const [userid, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

    const jtoken = localStorage.getItem('jtoken');
    const userid = localStorage.getItem('userid'); 

    // userid를 문자열로 변환하여 상태 변수에 저장
    const parsedUserId = JSON.stringify(userid); 
    //JSON.stringify()는 JavaScript 객체를 JSON 문자열 표현으로 변환하는 데 사용.
    setUserId(parsedUserId);
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
