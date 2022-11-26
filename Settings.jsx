import './Settings.css';
import Sidebar from '../components/Sidebar.jsx';

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settings-wrapper'>
            <div className="settings-title">
                <span className="settings-update-title">Update Your Account</span>
                <span className="settings-delete-title">Delete Account</span>
            </div>
            <form className="settings-form">
                <label>Profile Picture</label>
                <div className="settings-pp">
                    <img src='./Images/dp.jpeg'></img>
                    <label htmlFor='fileInput'><i className="settings-pp-icon fa-solid fa-user-large"></i> </label>
                    <input type='file' id='file-input' style={{display:'none'}}></input>
                </div>
                <label>User Name</label>
                <input type='text' placeholder='Atif Malik'></input>
                <label>Email</label>
                <input type='email' placeholder='atifjm@hotmail.com'></input>
                <label>Password</label>
                <input type='password'></input>
                <button className="settings-submit">Update</button>
            </form>
            Settings
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings
