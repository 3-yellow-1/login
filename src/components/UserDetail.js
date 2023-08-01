import React, { useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
    const [useId, setUseId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
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
    const handleUseIdSearchSubmit = (event) => {
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
           .then((response) => { 
                const ruid = response.data.data;
                const { name, mobile } = ruid;
                console.log(name);
                setName(name);
                console.log(mobile);
                setMobile(mobile);
        })
        .catch((error) => { 
            console.log(error);
         });
        };
//------------------------------------------------------------------------------
    const handleDataChangeSubmit = (event) => {
        event.preventDefault();
        axios.post('https://devawsback.gongsacok.com/admin/setUserDetail', {
            ruid: useId,
            name: name,
            mobile: mobile,
            })
            .then((response) => {
            console.log('Data updated successfully:', response.data);
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
//     UseTokenCheck();
// //------------------------------------------------------------------------------
//     const navigate = useNavigate();
//     const handleInformationPageChange = () => {
//         navigate('/Information',{replace:true});
//         // {replace:true} = 현재 페이지의 URL을 새 페이지의 URL로 대체해야 함을 나타냄?
//         //새 페이지로 이동하면 브라우저 기록에 새 항목이 생성되지 않고 대신 현재 기록 항목을 새 항목으로 덮어씀.
//     };
// //------------------------------------------------------------------------------
//     return (
//         <div className='UserList'>
//             <div>
//                 <button className='InformationButton' 
//                         type="button" 
//                         onClick={handleInformationPageChange}>프로필
//                 </button>
//             </div>
//             <div className='tableBox'>
//                 <ul className='tableBoxUl'>
       
//                     <li>리스트</li>
//                     <li>상세정보</li>
//                 </ul>
//                 <UserList_List />
//                 <Data />
//             </div>
//         </div>
//         );
//     };

export default UserDetail;