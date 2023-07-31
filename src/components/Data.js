import React, { useState } from 'react';
import axios from '../services/axiosConfig'; // 헤더에 토큰 넣어서 통신

const Data = () => {

    const [useId, setUseId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    const handleUseIdSearch = (event) => {
        setUseId(event.target.value);
    }  
    const handleNameChange = (event) => {
        setName(event.target.value);
    } 
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    } 

    const handleUseIdSearchSubmit = (event) => {
        event.preventDefault();
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

export default Data;