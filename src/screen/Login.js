import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Login 컴포넌트 선언
const Login = () => {
  // 상태 변수 선언
  const [username, setUsername] = useState(''); //동적인 값을 상태(state) 
                                                //첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수 = 상태의 기본값을 파라미터로 넣어서 호출
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 아이디 입력 핸들러
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // axios를 사용하여 서버로 POST 요청 보냄
      const response = await axios.post('https://devawsback.gongsacok.com/pub/login', { //await 키워드는 async 함수 안에서만 사용
        userid: username,
        passwd: password
      });

      // 응답 데이터에서 jtoken과 userid 추출
      const { jtoken, userid } = response.data.data;

      // jtoken과 userid를 로컬 스토리지에 저장
      localStorage.setItem('jtoken', jtoken);
      localStorage.setItem('userid', userid);

      console.log(response.data.data);

      // 입력한 아이디와 응답으로 받은 userid 비교하여 페이지 이동
      if (username === userid) {
       
        navigate('/Profile');

      } else {
        console.log('Invalid credentials');
        
      }

    } catch (error) {
      alert("아이디와 비밀번호가 올바르지 않습니다.")
    }
  };

  // JSX 반환
  return (
    <div className='Login'>
      <h2>로그인</h2>
      <form className="contentWrap" onSubmit={handleSubmit}>
        <div>
          <label className='inputTitle'>아이디</label>
          <div className='inputWrap'>
            <input className='input' type="text" value={username} onChange={handleUsernameChange} />
          </div>
        </div>
        <div style={{marginTop: "30px"}}>
          <label className='inputTitle'>비밀번호</label>
          <div className='inputWrap'>
            <input className='input' type="password" value={password} onChange={handlePasswordChange} />
          </div>
            <button className='bottomButton' type="submit">확인</button>
        </div>     
      </form>
    </div>
  );
};

export default Login;
