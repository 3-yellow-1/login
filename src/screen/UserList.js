import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseTokenCheck from '../services/UseTokenCheck';


const UserList = () => {
    
    UseTokenCheck();

    const navigate = useNavigate();
    const handleInformationPageChange = () => {
        navigate('/Information',{replace:true});
        // {replace:true} = 현재 페이지의 URL을 새 페이지의 URL로 대체해야 함을 나타냄?
        //새 페이지로 이동하면 브라우저 기록에 새 항목이 생성되지 않고 대신 현재 기록 항목을 새 항목으로 덮어씀.
    };

    return (
        <div className='UserList'>
            <div>
                <button className='InformationButton' 
                        type="button" 
                        onClick={handleInformationPageChange}>프로필
                </button>
            </div>
            <div className='tableBox'>
  
            </div>
        </div>
        );
    };

export default UserList;