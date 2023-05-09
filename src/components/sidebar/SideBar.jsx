import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://img.okezone.com/okz/500/library/images/2021/01/11/u8s9jv5k9q0vfkg1yym6_16891.jpeg" alt="Profile" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo hic corrupti dicta autem quo.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarSocialIcon fa-brands fa-github"></i>
                <i className="sidebarSocialIcon fa-brands fa-linkedin"></i>
                <i className="sidebarSocialIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
