import React, { useState } from 'react';
import axios from 'axios';

const Data = () => {

    const [useId, setUseId] = useState("");

    axios.defaults.withCredentials = true;
    const handleUseIdSearchSubmit = (event) => {
        event.preventDefault();
        axios.post('https://devawsback.gongsacok.com/admin/getUserDetail', {
                ruid: useId
                })
           .then((response) => { 
                const jtoken_Token = response.headers['authorization'];
                console.log(jtoken_Token);
                console.log(response.data.data);
                const ruid = response.data.data;
            if(useId === ruid){   
                console.log('jtoken_Token', jtoken_Token);
                localStorage.setItem('jtoken_Token', jtoken_Token);
                axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${jtoken_Token}`;
       
            }
        })
        .catch((error) => { 
            console.log(error);
         });
        };
    
    const handleUseIdSearch = (event) => {
        setUseId(event.target.value);
    }  

    return (
        <div className='Data'>
            <form onSubmit={handleUseIdSearchSubmit}>
                <article>
                    <h3>
                        입력
                    </h3>
                    <input className='input' 
                        type="text" 
                        value={useId} 
                        onChange={handleUseIdSearch} />
                </article>
                <button className='UseIdSearchButton' type="submit">확인</button>
            </form>
        </div>
        );
    };

export default Data;