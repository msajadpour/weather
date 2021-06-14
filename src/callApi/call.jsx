
import React, { useEffect ,  useState } from 'react';
import axios from 'axios';
import './style.scss'
const Call = () => {
    const axios = require('axios');
    const[sidedata , setData] = useState([])
     useEffect(() => {

        axios.post(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=aac7ac08046e7097142e6169ad86ba3a`)

            .then((res) => {
                setData(res)
                
              })
              .catch((error) => {

              })
    },[])

    return (
        <div>
            {console.log( sidedata)}
            <h1>this is a test component</h1>
            <h3>mohammad<span>sajadpour</span></h3>
            <span className="name">hello mohammad</span>
            {/* {sidedata.map(person => (
                <p>{person.first_name}</p>
            ))} */}

        </div>
    );
}

export default Call;