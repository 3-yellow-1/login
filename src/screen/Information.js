import React, { useState, useEffect } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import HandleLogout from '../services/HandleLogout';

// Profile 컴포넌트 선언
const Information = () => {

    // 상태 변수 선언
    const [userid, setUserId] = useState(''); // userid 상태 변수

    // 네비게이션 객체 가져오기
    const navigate = useNavigate();

    const history = useHistory();

  useEffect(() => {

    // 로컬 스토리지에서 jtoken과 userid 가져오기
    const jtoken = localStorage.getItem('jtoken');
    const userid = localStorage.getItem('userid'); //브라우저의 로컬 저장소에서 'userid' 키와 연결된 값을 검색하는 데 사용되는 메서드 호출.

    console.log(userid);
    // userid를 문자열로 변환하여 상태 변수에 저장
    const parsedUserId = JSON.stringify(userid); //JSON.stringify()는 JavaScript 객체를 JSON 문자열 표현으로 변환하는 데 사용.
    console.log(parsedUserId);
    setUserId(parsedUserId);
  
  }, [navigate]);
  
  function handleUseHistory() {
    history.back();
  }

  // JSX 반환
  return (
    <div className="Information">
      <div className="InformationWrap">
      <button onClick={ handleUseHistory }>닫기</button>
      <h2>프로필</h2>
      <div className='contentWrap'>
          <label className='inputTitle'>아이디</label>
          <div className='inputWrap'>
            <p>{userid}</p>
          </div>
          <button className='bottomButton' type="submit" onClick={() => HandleLogout(navigate)}>로그아웃</button>
      </div>
      </div>
    </div>
  );
};

export default Information;
