import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleLogout from '../services/HandleLogout';

// Profile 컴포넌트 선언
const Profile = () => {

    // 상태 변수 선언
    const [userid, setUserId] = useState(''); // userid 상태 변수

    // 네비게이션 객체 가져오기
    const navigate = useNavigate();

  useEffect(() => {

    // 로컬 스토리지에서 jtoken과 userid 가져오기
    const jtoken = localStorage.getItem('jtoken');
    const userid = localStorage.getItem('userid');

    // userid를 문자열로 변환하여 상태 변수에 저장
    const parsedUserId = JSON.stringify(userid);
    setUserId(parsedUserId);
  
  }, [navigate]);

  // JSX 반환
  return (
    <div className="profile">
      <h2>프로필</h2>
      <div className='contentWrap'>
          <label className='inputTitle'>아이디</label>
          <div className='inputWrap'>
            <p>{userid}</p>
          </div>
          <button className='bottomButton' type="submit" onClick={() => HandleLogout(navigate)}>로그아웃</button>
      </div>
    </div>
  );
};

export default Profile;
