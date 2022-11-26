import './Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
        <form className='login-form'>
            <label>Email</label>
            <input className='login-input' type='text' placeholder='Enter Email...'></input>
            <label>Password</label>
            <input className='login-input' type='password' placeholder='Enter password...'></input>
            <button className='login-button'>LogIn</button>
        </form>
        <button className='login-register-button'>
          <Link to='/register' className='link'>Register</Link>
        </button>
    </div>
  )
}

export default Login
