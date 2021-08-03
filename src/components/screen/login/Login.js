import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login  from '../../action/authAction';
import './_loginScreen.scss'

const LoginScreen = () => {
   const dispatch = useDispatch();

   const accessToken = useSelector(state => state.auth.accessToken);

   const handleLogin = () => {
      dispatch(Login())
   }

   const history = useHistory()
   
   useEffect(() => {
      if (accessToken) {
         history.push('/home')
      }
   }, [accessToken,history])

   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handleLogin}>Login With google</button>
         </div>
      </div>
   )
}

export default LoginScreen;