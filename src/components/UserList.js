import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  
  const [listItems, setListItems] = useState([]);
  // 사용자 목록을 저장하는 상태 변수
  // listItems.map()을 사용하려면 useState([]); 빈 배열로 초기화.

  useEffect(() => { // 컴포넌트가 마운트될 때(초기 렌더링 시) 한 번만 실행되는 useEffect 훅!

    const UserListItem = () => {

      const jtoken = localStorage.getItem('jtoken');
      if (jtoken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
      }
      axios.post('https://devawsback.gongsacok.com/admin/listUser', {
          offset: 0, // 사용자 목록의 시작 오프셋
          size: 6, // 출력된 사용자의 개수
        })
        .then((response) => {
            setListItems(response.data.data); // 서버로부터 받은 사용자 목록 데이터를 상태 변수에 업데이트.
        })
        .catch((error) => {
          console.log('error', error);
        });
    };

    UserListItem();
    
  }, []);

  return (
    <div className='userList'>      
        <div className='userListWrap'>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>전화번호</th>
              </tr>
            </thead>
            {listItems.map((Items) => (
                <tbody key={Items.uid}>
                  <td>{Items.uid}</td>
                  <td>{Items.userid}</td>
                  <td>{Items.name}</td>
                  <td>{Items.mobile}</td>
                </tbody>
            ))}
          </table>
        </div>      
    </div>
  );
};

export default UserList;