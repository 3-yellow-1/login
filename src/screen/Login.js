import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  localStorage.clear();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
//------------------------------------------------------------------------------
  const handleUsernameChange = (event) => {
    // event가  파라미터로 온다.
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
//------------------------------------------------------------------------------
  const handleSubmit = async (event) => { 
    event.preventDefault();
    //인증을 위해 사용자 자격 증명(사용자 이름 및 암호)을 서버로 보냄.
    axios.post('https://devawsback.gongsacok.com/pub/login', {
      userid: username,
      passwd: password
      }
    )

    .then((response) => { 
      // 응답 데이터에서 jtoken과 userid 추출
      const { jtoken, userid } = response.data.data;
      // jtoken과 userid를 로컬 스토리지에 저장
      localStorage.setItem('jtoken', jtoken);
      localStorage.setItem('userid', userid);
      // console.log(response.data.data);
      if (username === userid) {
        navigate('/User');
      } else {
        console.log('아이디와 비밀번호가 일치하지 않습니다.');
      }
    })

    .catch((error) => { 
      alert('아이디 혹은 비밀번호가 잘못 입력되었습니다.');
      // if (error.response) { //`error` 객체에 `response` 속성이 있는지 확인.
      //   if (error.response.status === 401) { // response.status 401 오류 알 경우. 401 오류 =  401(권한 없음)
      //     alert('아이디 혹은 비밀번호가 잘못 입력되었습니다.');
      //   } else {
      //     alert('요청 처리 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      //   }
      // } else if (error.request) {
      //   alert('네트워크 오류입니다. 인터넷 연결을 확인하고 다시 시도해주세요.');
      // } else {
      //   console.error('Error:', error.message);
      //   alert('아이디 혹은 비밀번호가 잘못 입력되었습니다.');
      // }
    });
};
//------------------------------------------------------------------------------
  return (
    <div className='Login'>
      <div className='LoginWrap'>
      <h2>로그인</h2>
      <form className="contentWrap" onSubmit={handleSubmit}>
        <div>
          <label className='inputTitle'>아이디</label>
          <div className='inputWrap'>
            <input className='input' 
                    type="text" 
                    value={username} 
                    onChange={handleUsernameChange} />
          </div>
        </div>
        <div style={{marginTop: "30px"}}>
          <label className='inputTitle'>비밀번호</label>
          <div className='inputWrap'>
            <input className='input' 
                    type="password" 
                    maxlength='10' 
                    value={password} 
                    onChange={handlePasswordChange} />
          </div>
            <button className='bottomButton' type="submit">확인</button>
        </div>     
      </form>
      </div>
    </div>
  );
};

export default Login;