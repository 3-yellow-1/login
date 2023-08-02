import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHeaders } from "../services/useHeaders";

const UserList = () => {

  const authorizationToken = useHeaders();
  const [listItems, setListItems] = useState([]);
  // 사용자 목록을 저장하는 상태 변수
  // listItems.map()을 사용하려면 useState([]); 빈 배열로 초기화.
//------------------------------------------------------------------------------  
  useEffect(() => { // 컴포넌트가 마운트될 때(초기 렌더링 시) 한 번만 실행되는 useEffect 훅!

    const UserListItem = () => {
          axios.post('https://devawsback.gongsacok.com/admin/listUser', {
          offset: 0, // 사용자 목록의 시작 오프셋
          size: 6, // 출력된 사용자의 개수
        },{ headers: { Authorization: authorizationToken }}
          )
        .then((response) => {
            setListItems(response.data.data); // 서버로부터 받은 사용자 목록 데이터를 상태 변수에 업데이트.
            console.log(response.data.data);
            const UserListData =  response.data.data;

//---------------------------------------------------------------------
            const UserListUid = UserListData[1];
            console.log(UserListUid);
            const names = UserListData.map((object) => object.uid);
            console.log(names);
//---------------------------------------------------------------------

        })
        .catch((error) => {
          console.log('error', error);
        });
    };

    UserListItem();
  }, [authorizationToken]);
//------------------------------------------------------------------------------
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
            <tbody>
            {listItems.map((Items) => (
                <tr key={Items.uid}>
                  <td>{Items.uid}</td>
                  <td>{Items.userid}</td>
                  <td>{Items.name}</td>
                  <td>{Items.mobile}</td>
                </tr>                
            ))}
            </tbody>
          </table>
        </div>      
    </div>
  );
};

export default UserList;