import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

  const [listItems, setListItems] = useState([]);
  // 사용자 목록을 저장하는 상태 변수
  // listItems.map()을 사용하려면 useState([]); 빈 배열로 초기화.
  const [uid, setUid] = useState([]);
  const [userid, setUserid] = useState([]);
  const [name, setName] = useState([]); 
  const [mobile, setMobile] = useState([]); 
  const [inputChanges, setInputChanges] = useState([]); // 정보변경 여부
  //------------------------------------------------------------------------------  

  useEffect(() => { // 컴포넌트가 마운트될 때(초기 렌더링 시) 한 번만 실행되는 useEffect 훅!
    // 두번째 인수로 빈 배열을 전달하면 컴포넌트가 처음 마운트될때만 실행
    // 사용자 목록을 불러오고 초기값으로 사용하는 변수에 저장

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
          const ListItemsdata = response.data.data;
          setListItems(ListItemsdata); // 사용자 목록을 업데이트
          setUid(ListItemsdata.map(item => item.uid));
          setUserid(ListItemsdata.map(item => item.userid));
          setName(ListItemsdata.map(item => item.name));
          setMobile(ListItemsdata.map(item => item.mobile));
          console.log(response.data.data);

          setInputChanges(ListItemsdata.map(() => false)); 
          // 모든 사용자에 대해 변경여부를 false로 초기화
        })
        .catch((error) => {
          console.log('error', error);
        });
    };
    
    UserListItem(); // // 마운트 시 API 실행
  }, []);

  const handleUserUidChange = (event, index) => {
    const updatedUid = [...uid]; 
    // "listItems" 배열의 복사본을 생성하여 할당.
    // 변경된 정보를 저장할 새로운 배열을 생성함.

    updatedUid[index] = event.target.value;
    // "updatedListItems" 배열에서 특정 인덱스에 해당하는 번호를 이벤트에서 받은 값으로 업데이트
    // 입력한 새로운 번호를 할당하여 업데이트

    setUid(updatedUid);
    // "setListItems" 함수를 사용하여 "listItems" 상태를 업데이트
    // 새로운 배열로 상태를 업데이트하여 화면을 리렌더링함
  };

  const handleUseridChange = (event, index) => {
    const updatedUserid = [...userid]; // "uid" 배열의 복사본을 생성하여 할당.
    updatedUserid[index] = event.target.value; 
    // 변경된 정보를 저장할 새로운 배열을 생성 ... 기존 배열의 값을 그대로 복사
    setUserid(updatedUserid); // 새로운 번호를 할당하여 업데이트
    setInputChanges(prevState => { // setInputChanges()로 inputChanges 상태 변경
      const newState = [...prevState];
      newState[index] = true; // input이 변경될 때마다 변경 여부를 기록
      return newState;
    });
  };

  const handleUserNameChange = (event, index) => {
    const updatedName = [...name];
    updatedName[index] = event.target.value;
    setName(updatedName);
    setInputChanges(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleUserMobileChange = (event, index) => {
    const updatedMobile = [...mobile];
    updatedMobile[index] = event.target.value;
    setMobile(updatedMobile);
    setInputChanges(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

//------------------------------------------------------------------------------
      const handleUserDataChangeSubmit = (event, index) => { 
      // 사용자 정보 수정 버튼 클릭 시 실행되는 함수.
      // event.preventDefault();
      const jtoken = localStorage.getItem('jtoken');
      if (jtoken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
        }
        const updatedListItems = [...listItems]; // "listItems" 배열의 복사본을 생성하여 할당
        // 변경된 사용자 정보를 DB에 전달하기 위한 데이터 및 사용자 정보 인덱스들을 복사
        const updatedUid = [...uid];
        const updatedUserid = [...userid];
        const updatedName = [...name];
        const updatedMobile = [...mobile];
    
      // 서버에 사용자 정보를 전달하여 업데이트.
      axios.post('https://devawsback.gongsacok.com/admin/setUserDetail', {
        ruid: updatedUid[index],
        userid: updatedUserid[index],
        name: updatedName[index],
        mobile: updatedMobile[index],
      })
      .then((response) => {
        console.log(response.data.data);
        setListItems(updatedListItems);
        alert("회원정보가 수정되었습니다.");
      })
      .catch((error) => {
        console.log('에러', error);
      });
    };
//------------------------------------------------------------------------------
return (
  <div className='userList'>
    <div className='userListWrap'>
      <form className='userListDataForm'>
        <table className='userListTable'>
          <thead>
            <tr>
              <th>회원번호</th>
              <th>아아디</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody className='userListTbody'>
            {listItems.map((Items, index) => (
              <tr key={Items.uid}>
                <td>
                  <input
                    className='userDatainput'
                    type="text"
                    value={uid[index]}
                    onChange={(event) => handleUserUidChange(event, index)}
                  />
                </td>
                <td>
                  <input
                    className='userDatainput'
                    type="text"
                    value={userid[index]}
                    onChange={(event) => handleUseridChange(event, index)}
                  />
                </td>
                <td>
                  <input
                    className='userDatainput'
                    type="text"
                    value={name[index]}
                    onChange={(event) => handleUserNameChange(event, index)}
                  />
                </td>
                <td>
                  <input
                    className='userDatainput'
                    type="text"
                    value={mobile[index]}
                    onChange={(event) => handleUserMobileChange(event, index)}
                  />
                </td>
                <td className='userDataChangeButtonBox'>
                  <button
                    className='userDataChangeButton'
                    type="submit"
                    onClick={(event) => handleUserDataChangeSubmit(event, index)}
                    disabled={!inputChanges[index]}
                  >
                    수정
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  </div>
);
};

export default UserList;