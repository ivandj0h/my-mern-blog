import './topbar.css'

export default function TopBar() {
    return (
        <div className='top-bar'>
            <div className='top-bar-left'>
                <i className="top-bar-icons fa-brands fa-github"></i>
                <i className="top-bar-icons fa-brands fa-linkedin"></i>
                <i className="top-bar-icons fa-brands fa-square-instagram"></i>
            </div>
            <div className='top-bar-center'>
                <ul className='top-bar-list'>
                    <li className='top-bar-listItem'>HOME</li>
                    <li className='top-bar-listItem'>ABOUT</li>
                    <li className='top-bar-listItem'>CONTACT</li>
                    <li className='top-bar-listItem'>WRITE</li>
                    <li className='top-bar-listItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='top-bar-right'>
                <img 
                className='top-bar-img'
                src="https://img.okezone.com/okz/500/library/images/2021/01/11/u8s9jv5k9q0vfkg1yym6_16891.jpeg" alt="ivandjoh" /> 
                <i className="top-bar-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
