import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
import '../components/css/Login.css'
import {auth} from '../firebase'
function Login() {
    const history=useHistory();  //allows us to programatically change the url
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');

    const signIn=e=>{
        e.preventDefault() //prevent page from refreshing
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))

        //fancy firebase login stuff comes here....
    }

    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it successfully created new user with email and password
            // console.log(auth);
            if (auth){
                history.push('/')
            }    
        })
        .catch(error=>alert(error.message))

        //fancy firebase register stuff comes here....
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                    <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
                
            </div>
            
        </div>
    )
}

export default Login
