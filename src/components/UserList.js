import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

  const [listItems, setListItems] = useState([]);
  useEffect(() => {

    const UserListItem = () => {

      const jtoken = localStorage.getItem('jtoken');
      if (jtoken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
      }
      axios.post('https://devawsback.gongsacok.com/admin/listUser', {
          offset: 0,
          size: 6, // 출력된 user의 갯수
        })
        .then((response) => {
            setListItems(response.data.data);
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