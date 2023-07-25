import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    localStorage.clear();
    const navigate = useNavigate();

    const handleLoginPageChange = () => {
        navigate('/Login',{replace:true});
    };
      
return (
    <div className='Main'>
        <div className='MainWrap'>
           <h2>
              React study
            </h2>
           <div>
                <button className='loginButton' 
                        type="button" 
                        onClick={handleLoginPageChange}>로그인
                </button>
            </div>
        </div>
    </div>
    );
};

export default Main;