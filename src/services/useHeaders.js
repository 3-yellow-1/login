import { useEffect, useState } from 'react';

export const useHeaders = () => { // 후크는 기능적 구성 요소 내에서 사용해야 하며 후크임을 나타내기 위해 이름에 'use'라는 단어로 시작해야 함.
  const [authorizationToken, setAuthorizationToken] = useState('');

  useEffect(() => {
    const jtoken = localStorage.getItem('jtoken'); // localStorage에서 'jtoken'이라는 키를 사용하여 저장된 값을 가져옴.
    if (jtoken) {
      setAuthorizationToken(`Bearer ${jtoken}`); //  jtoken 값을 'Bearer' 형태로 상태 값에 설정함.
    }
  }, []);

  return authorizationToken; // 토큰 값을 반환함.
};