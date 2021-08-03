import React, { useEffect } from 'react';
import {useSelector } from 'react-redux';
import Sidebar from './sidebar/Sidebar';
import Homescreen from './screen/Homescreen/Homescreen';
import { useHistory } from 'react-router-dom';
export default function Home() {
    const style={
        display:"flex"
      }
   const history = useHistory();  
   const accessToken = useSelector(state => state.auth.accessToken);
   useEffect(() => {
     if(!accessToken){
         history.push('/');
     }
   }, [])
    return (
        <div>
            <div className="app_container" style={style}>
                <Sidebar />
                <Homescreen />
            </div>
        </div>
    )
}
