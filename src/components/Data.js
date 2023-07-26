import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios
        .get("https://devawsback.gongsacok.com/admin/getUserDetail",{
            "ruid":5
        }
        )
        .then((response) =>{
            setData(response.data.data);
            console.log(response.data.data);
        })
        .catch(()=>{
            console.log("실패");
        });
    }, []); 

    return (
        <div className='Data'>
            <article>
                {/* <p>{data.id}</p>
                <p>{data.title}</p> */}
            </article>
        </div>
        );
    };

export default Data;