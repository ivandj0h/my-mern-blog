import { SideBar } from '../../components'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className='settingsUpdateTitle'>
              Update Your Account
            </span>
            <span className='settingsDeleteTitle'>
              Remove Your Account
            </span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
              src='https://img.okezone.com/okz/500/library/images/2021/01/11/u8s9jv5k9q0vfkg1yym6_16891.jpeg' 
              alt='Profile' />
              <label htmlFor='fileInput'>
                <i className="settingsPPIcon fa fa-user-circle"></i>
              </label>
              <input type='file' id='fileInput' style={{display: 'none'}} />
              </div>
              <label>Username</label>
              <input type='text' placeholder='ivandjoh' />
              <label>Email</label>
              <input type='email' placeholder='ivandi.djoh@gmail.com' />
              <label>Password</label>
              <input type='password' />
              <button className='settingsSubmit'>Update</button>
          </form>
        </div>
          <SideBar />
    </div>
  )
}
