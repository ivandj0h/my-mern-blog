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
                    <li className='top-bar-listItem'>Home</li>
                    <li className='top-bar-listItem'>About</li>
                    <li className='top-bar-listItem'>Contact</li>
                    <li className='top-bar-listItem'>Write</li>
                    <li className='top-bar-listItem'>Logout</li>
                </ul>
            </div>
            <div className='top-bar-right'>
                <img 
                className='top-bar-img'
                src="https://res.cloudinary.com/ivandjoh/image/upload/v1683592956/profile_w30tdg.png" alt="ivandjoh" /> 
                <i className="top-bar-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
