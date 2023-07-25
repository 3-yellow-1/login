
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseTokenCheck from '../services/UseTokenCheck';

const UserList = () => {
    
    UseTokenCheck();

    const navigate = useNavigate();
    const handleInformationPageChange = () => {
        navigate('/Information',{replace:true});
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