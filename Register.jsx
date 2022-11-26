import './Register.css';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <form className='register-form'>
            <label>User Name</label>
            <input className='register-input' type='text' placeholder='Enter User Name...'></input>
            <label>Email</label>
            <input className='register-input' type='text' placeholder='Enter Email...'></input>
            <label>Password</label>
            <input className='register-input' type='password' placeholder='Enter password...'></input>
            <button className='register-button'>Register</button>
        </form>
        <button className='register-login-button'>
          <Link to='/login' className='link'>Login</Link>
        </button>
    </div>
  )
}

export default Register
