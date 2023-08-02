import React, { useState } from 'react';
import axios from 'axios';

const UserDetail = () => {

    const [useId, setUseId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState(""); // 사용자의 정보를 담을 상태 변수들.    
//------------------------------------------------------------------------------
    const handleUseIdSearch = (event) => {
        setUseId(event.target.value);
    }  
    const handleNameChange = (event) => {
        setName(event.target.value);
    } 
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    } 
//------------------------------------------------------------------------------
    const handleUseIdSearchSubmit = (event) => { // 사용자 ID로 검색 버튼 클릭 시 실행되는 함수.
        event.preventDefault(); 
        const jtoken = localStorage.getItem('jtoken');
        // 키-값 쌍을 사용자 브라우저에 로컬로 저장
        if (jtoken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
            // axios.defaults = Axios에 대한 기본 구성을 보유하는 개체?
            // axios.defaults.headers = 기본 헤더를 보유하는 객체
            // Authorization = HTTP 요청에서 자격 증명을 전달하는 표준 방법
            // 이 시점 이후에 이루어진 모든 Axios 요청의 Authorization 헤더에 포함
          }
        axios.post('https://devawsback.gongsacok.com/admin/getUserDetail', {
                ruid: useId
                })
           .then((response) => { // 서버로부터 받은 데이터에서 이름과 휴대폰 번호를 추출하여 상태를 업데이트.
                const ruid = response.data.data;
                const { name, mobile } = ruid;
                console.log(name);
                setName(name);
                console.log(mobile);
                setMobile(mobile);
        })
        .catch((error) => { 
            console.log(error);
            alert("입력하신 내용을 다시 한 번 확인해주세요.")
         });
        };
//------------------------------------------------------------------------------
    const handleDataChangeSubmit = (event) => { // 사용자 정보 수정 버튼 클릭 시 실행되는 함수.
        event.preventDefault();

        const jtoken = localStorage.getItem('jtoken');
        if (jtoken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
          }
        // 서버에 사용자 정보를 전달하여 업데이트.
        axios.post('https://devawsback.gongsacok.com/admin/setUserDetail', {
            ruid: useId,
            name: name,
            mobile: mobile,
            })
            .then((response) => {
            console.log('Data updated successfully:', response.data);
            alert("사용자의 정보가 수정되었습니다.");
            setUseId('');
            setName('');
            setMobile(''); // 업데이트 후 상태값을 초기화 함.            
            })
            .catch((error) => {
            console.log('Error updating data:', error);
            });
        };
//------------------------------------------------------------------------------  
    return (
        <div className='Data'>
            <h2>User Detail</h2>
            <form className='DataSearchForm' onSubmit={handleUseIdSearchSubmit}>
            <div>
                <input className='inputSearch' 
                        type="text" 
                        value={useId} 
                        onChange={handleUseIdSearch} />
                <button className='UseIdSearchButton' type="submit">검색</button>
            </div>
            </form>
            <form className='DataForm' onSubmit={handleDataChangeSubmit}>
                <div className='userDataBox'>
                    <input className='inputData' 
                            type="text" 
                            value={name}
                            onChange={handleNameChange}
                            />
                    <input style={{marginTop: "30px"}}
                            className='inputData' 
                            type="text" 
                            value={mobile}
                            onChange={handleMobileChange}
                            />
                </div>
                <button className='DataChangeButton' type="submit">수정</button>
            </form> 
        </div>
        );
    };
export default UserDetail;