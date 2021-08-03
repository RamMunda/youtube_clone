import firebase from 'firebase/app';
import auth from '../../firebase';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from './actiontype';
const Login = () => async dispatch =>{
    try{
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
        const res = await auth.signInWithPopup(provider);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
    }
    catch(err){
        console.log(err);

    }
}
// const Loginrequest = () => async dispatch =>{
//     dispatch({ 
//         type :  LOGIN_REQUEST,
//         loading : true
//     })
// }

export default Login;
