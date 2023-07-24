import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';

const UserList = () => {
    // useEffect(() => {
    //     axios.get('https://devawsback.gongsacok.com/pub/listUser')
    //         .then(response => {
    //             console.log(response);
    //         });
    // }, []);

    useEffect(() => {

        // 로컬 스토리지에서 jtoken과 userid 가져오기
        localStorage.getItem('jtoken');
        localStorage.getItem('userid'); //브라우저의 로컬 저장소에서 'userid' 키와 연결된 값을 검색하는 데 사용되는 메서드 호출.
      
      });

    const navigate = useNavigate();

    const handleInformationPageChange = () => {
        navigate('/Information',{replace:true});
    };
    return (
        <div className='UserList'>
            <div>
                 <button className='InformationButton' type="button" onClick={handleInformationPageChange}>프로필</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default UserList;