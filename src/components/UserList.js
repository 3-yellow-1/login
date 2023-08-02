import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listItems, setListItems] = useState([]);
  // 사용자 목록을 저장하는 상태 변수
  // listItems.map()을 사용하려면 useState([]); 빈 배열로 초기화.
  //------------------------------------------------------------------------------  

  useEffect(() => { // 컴포넌트가 마운트될 때(초기 렌더링 시) 한 번만 실행되는 useEffect 훅!

    const UserListItem = () => {

          const jtoken = localStorage.getItem('jtoken');
          if (jtoken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
          }
          axios.post('https://devawsback.gongsacok.com/admin/listUser', {
          offset: 0, // 사용자 목록의 시작 오프셋
          size: 20, // size of will print.
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

  const handleUserUidChange = (event, index) => {
    const updatedListItems = [...listItems]; // "listItems" 배열의 복사본을 생성하여 할당.
    // 변경된 정보를 저장할 새로운 배열을 생성함.

    updatedListItems[index].uid = event.target.value;
    // "updatedListItems" 배열에서 특정 인덱스에 해당하는 번호를 이벤트에서 받은 값으로 업데이트
    // 입력한 새로운 번호를 할당하여 업데이트

    setListItems(updatedListItems);
    // "setListItems" 함수를 사용하여 "listItems" 상태를 업데이트
    // 새로운 배열로 상태를 업데이트하여 화면을 리렌더링함
  };

  const handleUserUseridChange = (event, index) => {
    const updatedListItems = [...listItems]; 
    updatedListItems[index].userid = event.target.value;
    setListItems(updatedListItems);
  };

  const handleUserNameChange = (event, index) => {
    const updatedListItems = [...listItems]; 
    updatedListItems[index].name = event.target.value;
    setListItems(updatedListItems);
  };

  const handleUserMobileChange = (event, index) => {
    const updatedListItems = [...listItems]; 
    updatedListItems[index].mobile = event.target.value;
    setListItems(updatedListItems);
  };
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
                <th></th>
              </tr>
            </thead>

            {/* <form className='DataForm' onSubmit={handleUserDataChangeSubmit}> */}
                <tbody>
                {listItems.map((Items, index) => (
                    <tr key={Items.uid}>
                      <td>
                          <input  className='userDatainput' 
                                  type="text" 
                                  value={Items.uid}
                                  onChange={(event) => handleUserUidChange(event, index)}
                                  />
                      </td>
                      <td>
                          <input  className='userDatainput' 
                                  type="text" 
                                  value={Items.userid}
                                  onChange={(event) => handleUserUseridChange(event, index)}
                                  />
                      </td>
                      <td>
                          <input  className='userDatainput' 
                                  type="text" 
                                  value={Items.name}
                                  onChange={(event) => handleUserNameChange(event, index)}
                                  />
                      </td>
                      <td>
                          <input  className='userDatainput' 
                                  type="text" 
                                  value={Items.mobile}
                                  onChange={(event) => handleUserMobileChange(event, index)}
                                  />
                      </td>
                      <td className='userDataChangeButtonBox'>
                        <button className='userDataChangeButton' type="submit">수정</button>
                      </td>
                    </tr>                
                ))}
                </tbody>
            {/* </form> */}
            
          </table>
        </div>      
    </div>
  );
};

export default UserList;