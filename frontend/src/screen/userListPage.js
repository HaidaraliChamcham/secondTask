import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserListPage = () => {
    const fetchData = () =>{
        return axios.get('https://reqres.in/api/users').then(({data}) =>{
            console.log(data.data.map((data) =>(
              
                        console.log(data.email)
                
            )));
            return JSON.stringify(data.data);
        }).catch( err =>{
            console.log(err);
        })
    }

    const [randomData, setRandomData] = useState('');
    useEffect(() => {
        fetchData().then(randomsData =>{
            setRandomData(randomsData);
        })
    }, []);
    return (
        <div>
            <pre>
                {randomData}
                
            </pre>
        </div>
    );
}

export default UserListPage;
